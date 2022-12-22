import React from "react";
import styles from "./layout.module.scss";

export const Layout: React.FC<React.PropsWithChildren> = function Layout(
  props
) {
  return <div className={styles.layout}>{props.children}</div>;
};
