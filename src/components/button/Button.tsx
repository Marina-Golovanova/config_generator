import React from "react";
import { Button as ButtonMuy } from "@mui/material";

type IButton = {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const Button = React.memo(function Button(props: IButton) {
  return (
    <ButtonMuy
      variant="contained"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </ButtonMuy>
  );
});
