import React from "react";
import { TextField } from "@mui/material";

type IInputText = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText: React.FC<IInputText> = React.memo(function InputText(
  props
) {
  return (
    <TextField
      value={props.value}
      label={props.label}
      variant="outlined"
      onChange={props.onChange}
    />
  );
});
