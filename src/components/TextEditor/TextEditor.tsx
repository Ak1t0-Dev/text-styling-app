import { Editor, EditorState, RichUtils } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";
import { Button } from "../Button/Button";

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const toggleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const toggleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  return (
    <>
      <div className="button-list">
        <Button onClick={toggleBold} title={"BOLD"} />
        <Button onClick={toggleItalic} title={"ITALIC"} />
      </div>
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Type something"
        />
      </div>
    </>
  );
};
