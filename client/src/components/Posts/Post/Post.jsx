import React from "react";
import useStyles from "./styles";
const Post = () => {
  // console.log(useStyles());
  const {
    border,
    card,
    cardActions,
    details,
    fullHeightCard,
    grid,
    media,
    overlay,
    overlay2,
    title,
  } = useStyles();

  return (
    <div className={border}>
      <h1 className={title}>post</h1>
      <div className={grid}></div>
    </div>
  );
};

export default Post;
