import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ClientsSide } from "./ClientsSide";
import MessagesSide from "./MessagesSide";
export default function Chat() {
  const [Livechat, setLivechat] = useState(null);

  const HandleLivechat = (id) => {
    console.log(users.filter((user) => user.id === id));
    const user = users.filter((user) => user.id === id)[0] ?? {};
    setLivechat({ ...user });
  };

  useEffect(() => {
    if (users && users.length > 0) setLivechat(users[0]);
    else setLivechat(null);
  }, []);

  return (
    <Container maxWidth="xl" sx={classes.root} disableGutters>
      <Paper sx={classes.Paper}>
        <Grid container>
          <Grid
            item
            xs={6}
            lg={6}
            xl={4}
            sx={{
              height: "auto !important",
              minHeight: "calc(100vh - 90px) !important",
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <ClientsSide users={users} HandleLivechat={HandleLivechat} />
          </Grid>
          <Grid
            item
            xs={6}
            lg={6}
            xl={8}
            sx={{
              height: "auto !important",
              minHeight: "calc(100vh - 90px) !important",
              position: "relative",
            }}
          >
            <MessagesSide Livechat={Livechat} setLivechat={setLivechat} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const classes = {
  root: {
    padding: { xs: 0, lg: " 0  20px 20px 0 " },
  },
  Paper: {
    maxHeight: "calc(100vh - 90px)",
    borderRadius: "1.5rem",
    overflow: "hidden",
    boxShadow:"rgba(255, 255, 255, 0.15) 0px 15px 25px, rgba(255, 255, 255, 0.05) 0px 5px 10px"
  },
};

const users = [
  {
    id: 1,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2007, 0, 29),
    avatar: "https://picsum.photos/id/247/200/300",
  },
  {
    id: 4,
    name: "User username",
    online: true,
    message: [
      {
        msg: "adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "t. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/239/200/300",
  },
  {
    id: 3,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/233/200/300",
  },
  {
    id: 5,
    name: "Biggy",
    online: false,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/238/200/300",
  },
  {
    id: 6,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/237/200/300",
  },
  {
    id: 7,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/236/200/300",
  },
  {
    id: 8,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/235/200/300",
  },
  {
    id: 9,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/235/200/300",
  },
  {
    id: 10,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/235/200/300",
  },
  {
    id: 11,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/235/200/300",
  },
  {
    id: 12,
    name: "User username",
    online: true,
    message: [
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "support",
      },

      {
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos magni ratione",
        who: "client",
      },
    ],
    sentat: new Date(2021, 9, 29),
    avatar: "https://picsum.photos/id/235/200/300",
  },
];
