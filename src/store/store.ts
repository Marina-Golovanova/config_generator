import { createStore, createEvent } from "effector";
import type { ISprite, ISpriteSettings } from "../types";

type IStore = {
  sprites: ISprite[];
  activeSprite: ISpriteSettings | null;
};

export const store$ = createStore<IStore>({
  sprites: [],
  activeSprite: null,
});

export const addSprite = createEvent<ISprite>();
export const setActiveSprite = createEvent<ISprite>();

store$.on(addSprite, (prev, props) => {
  const width = props.width / 2;
  const height = props.height / 2;

  return {
    ...prev,
    sprites: prev.sprites.concat({
      name: props.name,
      url: props.url,
      width,
      height,
    }),
  };
});

store$.on(setActiveSprite, (prev, props) => {
  const parent = "game.world";
  return {
    ...prev,
    activeSprite: {
      ...props,
      parent,
    },
  };
});

store$.watch(console.log);
