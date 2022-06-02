import React from "react";
import useStyles from "./styles";

const Form = () => {
  // console.log(useStyles());
  const { buttonSubmit, fileInput, form, paper, root } = useStyles();

  return (
    <div className={form}>
      <input className={fileInput} type="file" name="" id="" />
      <button className={buttonSubmit}></button>
    </div>
  );
};

export default Form;
