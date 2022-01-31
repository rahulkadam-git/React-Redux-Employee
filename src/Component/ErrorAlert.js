import React from "react";

export default function ErrorAlert(props) {
  return (
    <div className="error-log">
      <h6 onClick={props.clearError}>{props.errorMessage}</h6>
    </div>
  );
}
