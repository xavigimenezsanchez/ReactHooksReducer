import React, { useReducer } from "react";
import appReducer from "./reducers";
import PostList from "./post/PostList";
import CreatePost from "./post/CreatePost";
import UserBar from "./user/UserBar";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl"
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl"
  }
];

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts
  });
  const { user, posts } = state;
  return (
    <Container>
      <Row>
        <Col>
          <UserBar user={user} dispatch={dispatch} />
          <br />
          {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
          <br />
          <hr />
          <PostList posts={posts} />
        </Col>
      </Row>
    </Container>

  );
}
