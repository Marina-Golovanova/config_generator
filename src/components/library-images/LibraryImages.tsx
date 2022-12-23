import React from "react";
import { useStore } from "effector-react";
import { store$, setActiveSprite } from "../../store/store";
import type { ISprite } from "../../types";
import styles from "./library-images.module.scss";

export const LibraryImages: React.FC = React.memo(function LibraryImages() {
  const store = useStore(store$);

  const handleImageChoice = React.useCallback((sprite: ISprite) => {
    setActiveSprite(sprite);
  }, []);

  return (
    <div className={styles.libraryImages}>
      {store.sprites.map((sprite) => (
        <img
          key={sprite.name}
          className={styles.sprite}
          src={sprite.url}
          alt={sprite.name}
          onClick={() => handleImageChoice(sprite)}
        />
      ))}
    </div>
  );
});
