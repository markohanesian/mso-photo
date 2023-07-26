import * as React from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { Instagram } from "@mui/icons-material/";
import Box from "@mui/material/Box";

export default function SocialButtonsGroup() {
  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Stack direction="row" spacing={1}>
        <Link target="_blank" href="https://www.instagram.com/markohanphoto/" color="error">
          <Instagram />
        </Link>
      </Stack>
    </Box>
  );
}
