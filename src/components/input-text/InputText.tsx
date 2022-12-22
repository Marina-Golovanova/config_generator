import React from "react";
import { TextField } from "@mui/material";

type IInputText = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText = React.memo(function InputText(props: IInputText) {
  return (
    <TextField
      value={props.value}
      label={props.label}
      variant="outlined"
      onChange={props.onChange}
    />
  );
});
