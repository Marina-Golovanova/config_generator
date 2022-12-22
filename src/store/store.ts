import { createStore, createEvent } from "effector";

type ISprite = {
  name: string;
  url: string;
  width: number;
  height: number;
};

export const store$ = createStore<{ sprites: ISprite[] }>({
  sprites: [],
});

export const addSprite = createEvent<ISprite>();

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

store$.watch(console.log);
