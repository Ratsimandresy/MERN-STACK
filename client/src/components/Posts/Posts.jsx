import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  // console.log(useStyles());
  const { actionDiv, mainContainer, smMargin } = useStyles();

  return (
    <div className={mainContainer}>
      <h1></h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
