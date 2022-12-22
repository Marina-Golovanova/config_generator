import React from "react";
import { Button } from "../button";
import { InputText } from "../input-text";
import { addSprite } from "../../store/store";
import styles from "./upload-image.module.scss";

type ISpriteData = {
  width: number;
  height: number;
  url: string;
};

export const UploadImage = React.memo(function UploadImage() {
  const [spriteName, setSpriteName] = React.useState<string>("");
  const [spriteData, setSpriteData] = React.useState<ISpriteData | null>();

  const inputTextRef = React.useRef<HTMLInputElement>(null);
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleChangeName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSpriteName(e.target.value);
    },
    []
  );

  const handleUploadImage = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        const sprite = files[0];
        const url = URL.createObjectURL(sprite);
        const image = new Image();
        image.onload = function () {
          const width = image.width;
          const height = image.height;
          setSpriteData({
            width,
            height,
            url,
          });
        };
        image.src = url;
      }
    },
    []
  );

  const sendSpriteData = React.useCallback(() => {
    resetData();
    if (spriteName && spriteData) {
      addSprite({
        name: spriteName,
        ...spriteData,
      });
    }
  }, [spriteName, spriteData]);

  const resetData = React.useCallback(() => {
    setSpriteName("");
    setSpriteData(null);
    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }, []);

  return (
    <div className={styles.uploadImage}>
      <InputText
        value={spriteName}
        label="Enter name of sprite"
        onChange={handleChangeName}
      />
      <input
        type="file"
        ref={inputFileRef}
        accept="image/png, image/gif, image/jpeg"
        onChange={handleUploadImage}
      />
      <Button
        onClick={sendSpriteData}
        text="send"
        disabled={!spriteName.length || !spriteData}
      />
    </div>
  );
});
