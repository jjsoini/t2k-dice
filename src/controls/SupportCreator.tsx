import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link';
import Menu from "@mui/material/Menu";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import HistoryIcon from "@mui/icons-material/SavedSearchRounded";
import NoHistoryIcon from "@mui/icons-material/ManageSearchRounded";
import { CreatorIcon } from "../icons/CreatorIcon"

import { useDiceRollStore } from "../dice/store";
import { RecentRoll, useDiceHistoryStore } from "./history";
import { DicePreview } from "../previews/DicePreview";
import Typography from "@mui/material/Typography";
import { getDiceToRoll, useDiceControlsStore } from "./store";

export function SupportCreator() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
    <Tooltip
    title={"Support me"}
    placement="right"
    disableInteractive>
      <IconButton
        aria-label="more"
        id="more-button"
        aria-controls={open ? "more-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <CreatorIcon />
      </IconButton>
      </Tooltip>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "more-button",
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <Stack width="240px" px={1} gap={0.5}>
          <EmptyMessage />
        </Stack>
      </Menu>
    </>
  );
}

function EmptyMessage() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        p: 1,
      }}
    >
      <Stack pt={1} pb={0} direction="row" spacing={1}>
        <CreatorIcon sx={{width: "32px", height: "32px"}}  />
        <Typography variant="caption" textAlign="left">
        <b>Hi!</b> I make maps and assets for modern TTRPGs. Check out <Link target="_blank" rel="noopener" color="#FFDD2C" href="https://patreon.com/pulpscape">patreon.com/pulpscape</Link> for more!
      </Typography>
      </Stack>
      <Link target="_blank" rel="noopener" href="https://patreon.com/pulpscape">
      <Box
        component="img"
        sx={{
          borderRadius: "8px",
          width: "100%"
        }}
        src="./thumb.jpg"
      >
      </Box>
      </Link>
      

    </Stack>
  );
}
