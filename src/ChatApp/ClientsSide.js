import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import moment from "moment";
import React from "react";
import CosAvatar from "./CosAvatar";
const SearchBox = () => {
  return (
    <TextField
      placeholder="search here..."
      id="outlined"
      sx={classes.search}
      size="small"
      InputProps={{
        endAdornment: (
          <IconButton size="small">
            <SearchIcon sx={{ color: "#218EA1" }} />
          </IconButton>
        ),
      }}
    />
  );
};

const ClientChatCard = ({ user, HandleLivechat }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return !matches ? (
    <Box
      display="flex"
      justifyContent="center"
      sx={classes.Chatacards}
      onClick={() => HandleLivechat(user.id)}
    >
      <CosAvatar avatar={user.avatar} />
    </Box>
  ) : (
    <Paper sx={classes.ClientChatCard} onClick={() => HandleLivechat(user.id)}>
      <Stack direction="row" alignItems="center" spacing={2} p="12px">
        <CosAvatar avatar={user.avatar} online={user.online} />
        <Stack direction="column" justifyContent="center" spacing={1}>
          <Typography sx={classes.ClientName}>{user.name}</Typography>
          <Typography sx={classes.ClientMessage}>
            {user.message[0].msg.substring(0, 26) + "..."}
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="end"
          spacing={1}
          sx={{ flexGrow: 1 }}
        >
          <Typography sx={classes.Time}>
            {moment(user.sentat).fromNow()}
          </Typography>
          <Typography sx={classes.notSeenMesseges}>5</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export const ClientsSide = ({ users, HandleLivechat }) => {
  return (
    <Box sx={{ maxHeight: "calc(100vh - 90px)", position: "relative" }}>
      <Box sx={classes.HeadBox}>
        <Typography sx={classes.Title} paragraph>
          Chats
        </Typography>
        <SearchBox />
      </Box>
      <Box sx={classes.ChatsBox}>
        <Stack
          direction="column"
          justifyContent="center"
          spacing={2}
        >
          {users.map((user, index) => (
            <ClientChatCard
              user={user}
              key={index}
              HandleLivechat={HandleLivechat}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const classes = {
  Chatacards: {
    transition: "all .2s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.09)",
    },
  },
  HeadBox: {
    position: "sticky",
    backgroundColor: "#FFFFFF",
    //   zIndex:9999,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "1.5rem 0 0 0",
    p: { xs: "1.5rem", lg: "1rem" },
    paddingBottom: "0 !important",
  },
  Title: {
    fontFamily: "'Cairo'",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "37px",
    letterSpacing: "0px",
    textAlign: "left",
  },
  ChatsBox: {
    maxHeight: "calc(100vh - 14.56rem)",
    overflow: "auto",
    
    "&::-webkit-scrollbar": {
        width: "3px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "12px",
      backgroundColor: "#969ba0",
    //   outline: "1px solid slategrey",
    },
    p: { xs: "1.5rem", lg: "3rem" },
  },
  search: {
    marginBottom: "2rem",
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: "14px",
    "& .MuiOutlinedInput-input:focus ~ fieldset": {
      outline: "2px solid #218EA1",
    },
    "& fieldset": { border: "none", borderRadius: "14px", top: 0 },
    "& label , input": {
      fontFamily: "'Cairo'",
      fontSize: "16px",
      letterSpacing: "0",
      lineHeight: "auto",
    },
  },
  ClientChatCard: {
    height: "84px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "1rem",
    transition: "all .2s",
    cursor: "pointer",

    "&:hover": {
      transform: "scale(1.08)",
      // boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    },
  },
  ClientName: {
    fontFamily: "'Roboto'",
    fontSize: { xs: ".9rem", lg: "16px" },
    fontWeight: "600",
    lineHeight: "18px",
    // display:{xs:"none", md:"block"}
  },
  ClientMessage: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: { xs: ".8rem", lg: "12px" },
    lineHeight: "14px",
    display: "flex",
    alignItems: "flex-end",
    color: "#9A9A9A",
    // display:{xs:"none", md:"block"}
  },
  Time: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "flex-end",
    textAlign: "right",
    color: "#9A9A9A",
  },
  notSeenMesseges: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    background: "linear-gradient(45deg, #218EA1 0%, #218EA1 100%);",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
  },
};
