import { Editor, EditorState } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Type something"
      />
    </div>
  );
};
