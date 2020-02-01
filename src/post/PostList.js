import React from "react";
import Post from "./Post";
import { CardColumns } from "react-bootstrap";

export default function PostList({ posts = [] }) {
  return (
    <CardColumns>
      {posts.map((p, i) => (
        <React.Fragment key={"post-" + i}>
          <Post {...p} />
          <hr />
        </React.Fragment>
      ))}
      </CardColumns>
  );
}
