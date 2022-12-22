import React from "react";
import type { ISpriteData } from "../UploadImage";

export const useSpriteData = (setSpriteData: (data: ISpriteData) => void) => {
  return React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files) {
        const sprite = files[0];
        const url = URL.createObjectURL(sprite);
        const image = new Image();

        image.onload = () => {
          const width = image.width;
          const height = image.height;

          setSpriteData({ width, height, url });
        };

        image.src = url;
      }
    },
    [setSpriteData]
  );
};
