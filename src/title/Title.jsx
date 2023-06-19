import React from "react";
import "./Title.css";

const Title = (props) => {
  /*
h1,
h2,
h3,
h4,
h5,
h6

props:{
  as: "h1" <= default, "h2, "h3, "h4", "h5", "h6"
  className:string
}
*/
  const classnames = ["title"];
  if (props.className) classnames.push(props.className);
  switch (props.as) {
    case "h2":
      return <h2 className={classnames.join(" ")}>{props.children}</h2>;
    case "h3":
      return <h3 className={classnames.join(" ")}>{props.children}</h3>;
    case "h4":
      return <h4 className={classnames.join(" ")}>{props.children}</h4>;
    case "h5":
      return <h5 className={classnames.join(" ")}>{props.children}</h5>;
    case "h6":
      return <h6 className={classnames.join(" ")}>{props.children}</h6>;
    default:
      return <h1 className={classnames.join(" ")}>{props.children}</h1>;
  }
  return <div>Title</div>;
};

export default Title;
