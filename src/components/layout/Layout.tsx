import React from "react";
import styles from "./layout.module.scss";

type ILayout = {
  children: JSX.Element;
};

export const Layout: React.FC<ILayout> = React.memo(function Layout(props) {
  return <div className={styles.layout}>{props.children}</div>;
});
