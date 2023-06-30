import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import {Instagram, Facebook } from '@mui/icons-material/';
import Box from '@mui/material/Box';

export default function SocialButtonsGroup() {
  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="Instagram" color="error">
          <Instagram />
        </IconButton>
        <IconButton aria-label="Facebook" color="primary">
          <Facebook />
        </IconButton>
      </Stack>
    </Box>
  );
}
