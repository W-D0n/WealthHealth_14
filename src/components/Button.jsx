import React from 'react'
import { Button as MuiButton } from "@mui/material";
import { createTheme } from '@mui/system';

const theme = createTheme({
  spacing: 4,
});

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props

  return (
    <MuiButton sx={{ margin: theme.spacing(1), textTransform: 'none' }}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  )
}