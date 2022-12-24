import React from "react";
import { useStore } from "effector-react";
import { $spritesLibrary, setActiveSpriteId } from "../../store/store";
import styles from "./library-images.module.scss";

export const LibraryImages: React.FC = React.memo(function LibraryImages() {
  const spritesLibrary = useStore($spritesLibrary);

  return (
    <div className={styles.libraryImages}>
      {spritesLibrary.map((sprite) => (
        <img
          key={sprite.id}
          className={styles.sprite}
          src={sprite.url}
          alt="sprite"
          onClick={() => setActiveSpriteId(sprite.id)}
        />
      ))}
    </div>
  );
});
