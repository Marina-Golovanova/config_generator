import React from "react";
import { LibraryImages } from "../library-images";
import { UploadImages } from "../upload-images";

import styles from "./sidebar.module.scss";

export const Sidebar: React.FC = React.memo(function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <UploadImages />
      <LibraryImages />
    </div>
  );
});
