import React from "react";
import { LibraryImages } from "../library-images";
import { UploadImage } from "../upload-image";

import styles from "./sidebar.module.scss";

export const Sidebar: React.FC = React.memo(function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <UploadImage />
      <LibraryImages />
    </div>
  );
});
