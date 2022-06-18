import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  console.log(postId);
  return <div>Post {postId}</div>;
}
