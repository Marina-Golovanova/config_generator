import React from "react";
import { Button } from "../button";
import { addImagesInLibrary } from "../../store/store";
import { useSprites } from "./hooks/useSprites";
import type { ISprite } from "../../types";
import styles from "./upload-image.module.scss";

export type ISpriteData = {
  width: number;
  height: number;
  url: string;
};

export const UploadImages = React.memo(function UploadImage() {
  const [sprites, setSprites] = React.useState<ISprite[]>([]);

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleSetSpriteData = useSprites((sprite) => {
    setSprites((sprites) => sprites.concat(sprite));
  });

  const resetData = React.useCallback(() => {
    setSprites([]);

    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  }, []);

  const sendSpriteData = React.useCallback(() => {
    if (sprites) {
      addImagesInLibrary(sprites);
    }

    resetData();
  }, [sprites, resetData]);

  return (
    <div className={styles.uploadImage}>
      <input
        type="file"
        ref={inputFileRef}
        accept="image/png, image/jpg"
        onChange={handleSetSpriteData}
        multiple={true}
      />
      <Button onClick={sendSpriteData} disabled={!sprites.length}>
        Send
      </Button>
    </div>
  );
});
