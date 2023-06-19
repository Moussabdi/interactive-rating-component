import React from "react";
import "./Container.css";

const Container = (props) => {
  /**
   * props:{
   * noGutters: boolean
   * fluid: boolean,
   * className:string,
   * }
   */
  /* const classnames = [
    "container",
    props.noGlutters && "no-gutters",
    props.fluid && "fluid",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
  console.log(classnames);
  return <div className={classnames}>container</div>; */

  const classnames = ["container"];
  if (props.fluid) classnames.push("fluid");
  if (props.noGlutters) classnames.push("no-glutters");
  if (props.className) classnames.push(props.className);
  console.log(classnames.join(" "));
  return <div className={classnames.join(" ")}>{props.children}</div>;
};

export default Container;
