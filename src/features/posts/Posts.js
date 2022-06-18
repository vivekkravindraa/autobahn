import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export default function Posts({ posts }) {
  return (
    posts &&
    posts.map((post, index) => (
      <Box
        key={index}
        sx={{
          width: "100%",
          borderRadius: "8px",
          background: "#000000",
          color: "#ffffff",
          marginBottom: "10px",
        }}
      >
        <List>
          <ListItem>
            <ListItemText
              style={{ textTransform: "capitalize" }}
              primary={post.id + ". " + post.title}
            />
          </ListItem>
          <Button
            style={{ background: "#ffce00", color: "#000000", marginLeft: 10 }}
          >
            View
          </Button>
          <Button
            style={{
              background: "#dd0000",
              color: "#ffffff",
              marginLeft: 10,
            }}
          >
            Edit
          </Button>
        </List>
      </Box>
    ))
  );
}
