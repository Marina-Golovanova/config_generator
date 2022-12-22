import React from "react";
import { Button } from "../button";
import { InputText } from "../input-text";
import { addSprite } from "../../store/store";
import { useSpriteData } from "./hooks/useSpriteData";
import styles from "./upload-image.module.scss";

export type ISpriteData = {
  width: number;
  height: number;
  url: string;
};

export const UploadImage = React.memo(function UploadImage() {
  const [spriteName, setSpriteName] = React.useState("");
  const [spriteData, setSpriteData] = React.useState<ISpriteData | null>(null);

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleChangeName = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSpriteName(e.target.value);
    },
    []
  );

  const handleSetSpriteData = useSpriteData(setSpriteData);

  const resetData = React.useCallback(() => {
    setSpriteName("");
    setSpriteData(null);

    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }, []);

  const sendSpriteData = React.useCallback(() => {
    if (spriteName && spriteData) {
      addSprite({
        name: spriteName,
        ...spriteData,
      });
    }

    resetData();
  }, [spriteName, spriteData, resetData]);

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
        accept="image/png, image/jpg"
        onChange={handleSetSpriteData}
      />
      <Button
        onClick={sendSpriteData}
        disabled={!spriteName.length || !spriteData}
      >
        Send
      </Button>
    </div>
  );
});
