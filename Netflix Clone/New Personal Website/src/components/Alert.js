import React from "react";

function Alert(props) {
    const capitalize = (word)=>{
        const low = word.toLowerCase()
        return low.charAt(0).toUpperCase() + low.slice(1)
    }
  return (
    props.alert && <div className={`alert-${props.alert.type} alert-dismissible fade show`} role="alert" id="alert-x">
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    
    </div>
  );
}

export default Alert;
