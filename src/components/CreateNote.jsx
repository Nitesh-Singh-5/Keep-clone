import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expand, setexpand] = useState(false);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandit = () => {
    setexpand(true);
  };
  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="OFF"
            />
          ) : null}
          <br /> <br />
          <textarea
            name="content"
            value={note.content}
            cols="3"
            rows="4"
            onChange={inputEvent}
            placeholder="Write a note..."
            onClick={expandit}
            autoComplete="OFF"
          ></textarea>
          {expand ? (
            <Button className="color-btn" onClick={addEvent}>
              <span class="material-icons">add</span>
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}
