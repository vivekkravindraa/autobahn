import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import Posts from "./Posts";
import autobahnLogo from "../../assets/images/autobahn-logo.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PostsView() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const displayFormModal = () => {
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Post
              </Typography>
              <CloseIcon
                onClick={handleClose}
                style={{ position: "absolute", top: 10, right: 10 }}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" variant="outlined" />
            </Box>
            <Button
              style={{ background: "#008000", color: "#ffffff", marginTop: 8 }}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img src={autobahnLogo} alt="autobahn-logo" height={80} />
          </div>
          <div>
            <Button
              style={{
                fontSize: 16,
                border: "2px solid #61dbfb",
                color: "#000000",
              }}
              onClick={() => setOpen(true)}
            >
              <CreateIcon fontSize="16px" style={{ marginRight: 4 }} />
              Add New Post
            </Button>
          </div>
        </div>
        <h2>Listing Posts - {posts.length}</h2>
        <Posts posts={posts} />
      </div>
      {open ? displayFormModal() : null}
    </React.Fragment>
  );
}
