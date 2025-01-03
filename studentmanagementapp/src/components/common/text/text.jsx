import React from "react";
import Typography from "@mui/material/Typography";

export const Text = ({align, color, variant, component, title}) => {
  return (
    <>
      <Typography align={align} color={color} variant={variant} component={component}>
        {title}
      </Typography>
    </>
  );
};
