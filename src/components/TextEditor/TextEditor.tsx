import { Editor, EditorState, RichUtils } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";
import { Button } from "../Button/Button";
import { customStyleMap } from "../../constants/customStyles";

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

  const toggleRed = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "red"));
  };

  const togglePurple = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "purple"));
  };

  return (
    <>
      <div className="button-list">
        <Button onClick={toggleBold} title={"BOLD"} />
        <Button onClick={toggleItalic} title={"ITALIC"} />
        <Button onClick={toggleRed} title={"red"} />
        <Button onClick={togglePurple} title={"purple"} />
      </div>
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Type something"
          customStyleMap={customStyleMap}
        />
      </div>
    </>
  );
};
