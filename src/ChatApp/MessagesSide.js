import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  Avatar, IconButton, Stack,
  TextField, Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";

const MessagesSide = ({ Livechat, setLivechat }) => {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const [LiveMessages, setMessages] = useState(Livechat?.message ?? []);
  const Handlchage = (e) => {
    setValue(e.target.value);
  };
  // console.log(Livechat.message)
  const SendMessage = () => {
    if (value === "") return;
    let msgs = LiveMessages ?? [];
    msgs = [...msgs, { msg: value, who: "support" }];
    setValue("");
    setMessages([...msgs]);
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    });
  };
  useEffect(() => {
    setMessages(Livechat?.message);
  }, [Livechat?.message]);

  return Livechat ? (
    <>
      <MessageHead Livechat={Livechat} />
      <Messages LiveMessages={LiveMessages} inref={ref} />

      <InputMessage
        value={value}
        Handlchage={Handlchage}
        SendMessage={SendMessage}
      />
    </>
  ) : (
    "Nomessages"
  );
};

const Messages = ({ LiveMessages, inref }) => {
  return (
    <Box sx={classes.StackMsgs}>
      <Stack direction="column" spacing={2}>
        {LiveMessages &&
          LiveMessages.map((m, index) =>
            m.who === "client" ? (
              <Typography sx={classes.ChatMessageLeft} key={index}>
                {m.msg}
              </Typography>
            ) : (
              <Typography sx={classes.ChatMessageRight} key={index}>
                {m.msg}
              </Typography>
            )
          )}
      </Stack>
      <div ref={inref} style={{ height: "1px" }} />
    </Box>
  );
};

const MessageHead = ({ Livechat }) => {
  return (
    <Box sx={classes.Head}>
      <Box sx={classes.user}>
        <Avatar alt="Client" src={Livechat.avatar} />
      </Box>
      <Stack
        paddingLeft="1rem"
        direction="column"
        justifyContent="center"
        spacing={0.5}
      >
        <Typography sx={classes.ClientName}>{Livechat.name}</Typography>
        <Typography sx={classes.ClientMessage}>
          {Livechat.online ? "Online" : "Offline"}
        </Typography>
      </Stack>
      {/* <Divider/> */}
    </Box>
  );
};

const InputMessage = ({ value, Handlchage, SendMessage }) => {
  return (
    <Box sx={classes.inputBox}>
      <TextField
        placeholder="Send message..."
        id="outlined"
        sx={classes.SendInput}
        value={value}
        onChange={Handlchage}
        InputProps={{
          endAdornment: (
            <IconButton size="small" onClick={SendMessage}>
              <SendRoundedIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

const classes = {
  Head: {
    height: "82px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    display: "flex",
    alignItems: "center",
  },
  user: {
    paddingLeft: "2rem",
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
  SendInput: {
    width: "100%",
    background: "linear-gradient(3.47deg, #218EA1 2.69%, #218EA1 97.31%)",
    borderRadius: "2rem",

    "& fieldset": { border: "none", top: 0 },
    "& label , input": {
      fontFamily: "'Cairo'",
      fontSize: "16px",
      letterSpacing: "0",
      lineHeight: "auto",
      color: "#FFFFFF",
    },
  },
  inputBox: {
    p: { xs: "0 20px", lg: "0 45px" },
    position: "absolute",
    bottom: "16px",
    width: "auto",
    left: "0",
    right: "0",
  },
  ChatMessageLeft: {
    maxWidth: "274px",
    padding: "20px",
    backgroundColor: "#F6F7F9",
    color: "#000000",
    borderRadius: "0 2rem 2rem 0",
    lineBreak: "anywhere",
  },
  ChatMessageRight: {
    lineBreak: "anywhere",
    maxWidth: "274px",
    padding: "20px",
    background: "linear-gradient(20.56deg, #218EA1 8.52%, #218EA1 91.48%);",
    color: "#FFFFFF",
    display: "block",
    marginLeft: "auto !important",
    borderRadius: "2rem 0 0 2rem",
  },
  StackMsgs: {
    padding: "16px 0",
    height: "calc(100vh - 16rem)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
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
  },
};

export default MessagesSide;
