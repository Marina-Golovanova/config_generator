import React from "react";
import { Button as ButtonMuy } from "@mui/material";

type IButton = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
};

export const Button: React.FC<React.PropsWithChildren<IButton>> =
  function Button(props) {
    return (
      <ButtonMuy
        variant="contained"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonMuy>
    );
  };
