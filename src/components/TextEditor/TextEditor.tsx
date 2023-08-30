import { Editor, EditorState, RichUtils } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";
import { Button } from "../Button/Button";
import { COLORS, customStyleMap } from "../../constants/customStyles";

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleClick = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <>
      <div className="button-list">
        <div>
          <Button
            inlineStyle={"BOLD"}
            title={"BOLD"}
            editorState={editorState}
            onClick={handleClick}
          />
          <Button
            inlineStyle={"ITALIC"}
            title={"ITALIC"}
            editorState={editorState}
            onClick={handleClick}
          />
        </div>
        <div>
          {Object.keys(COLORS).map((color) => (
            <Button
              key={color}
              inlineStyle={color}
              title={color}
              editorState={editorState}
              onClick={handleClick}
            />
          ))}
        </div>
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
