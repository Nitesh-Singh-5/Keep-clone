import React from "react";
import Button from "@material-ui/core/Button";

export default function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className="saved_note">
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <Button className="Button" onClick={deleteNote}>
        <span class="material-icons">delete</span>
      </Button>
    </div>
  );
}
