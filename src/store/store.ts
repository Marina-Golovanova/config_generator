import { createStore, createEvent } from "effector";
import type { ISprite } from "../types";

export const $spritesLibrary = createStore<ISprite[]>([]);
export const $activeSpriteId = createStore<string | null>(null);

export const addImagesInLibrary = createEvent<ISprite[]>();
export const setActiveSpriteId = createEvent<string>();

$spritesLibrary.on(addImagesInLibrary, (prev, sprites) => {
  const downscaledSprites = sprites.map((sprite) => ({
    ...sprite,
    width: sprite.width / 2,
    height: sprite.height / 2,
  }));

  return prev.concat(downscaledSprites);
});

$activeSpriteId.on(setActiveSpriteId, (_, spriteId) => spriteId);

$spritesLibrary.watch(console.log);
$activeSpriteId.watch(console.log);
