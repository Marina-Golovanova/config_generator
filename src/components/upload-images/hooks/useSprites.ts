import React from "react";
import { nanoid } from "nanoid";
import { ISprite } from "../../../types";

export const useSprites = (onSpriteReady: (value: ISprite[]) => void) => {
  return React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files) {
        Object.values(files).forEach((file) => {
          const url = URL.createObjectURL(file);
          const image = new Image();

          image.onload = () => {
            const id = nanoid();
            const width = image.width;
            const height = image.height;

            onSpriteReady([{ id, width, height, url }]);
          };

          image.src = url;
        });
      }
    },
    [onSpriteReady]
  );
};
