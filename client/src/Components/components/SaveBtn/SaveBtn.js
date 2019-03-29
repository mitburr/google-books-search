import React from "react";
import "./SaveBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  if (!props.saved) {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✔️
    </span>
    );
  }
  else {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ❌
      </span>
    );

  }
}

export default SaveBtn;
