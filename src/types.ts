export type ISprite = {
  name: string;
  url: string;
  width: number;
  height: number;
};

export type ISpriteSettings = ISprite & {
  parent: string;
  scale?: number;
  anchor?: [x: number, y: number];
};
