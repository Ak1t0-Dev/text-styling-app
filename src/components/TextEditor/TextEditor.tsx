import { Editor, EditorState, RichUtils } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";
import { Button } from "../Button/Button";
import { COLORS, FONTSIZE, customStyleMap } from "../../constants/customStyles";

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleClick = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <>
      <div className="styles-container">
        <h1>Text Styling App</h1>
        <div className="styles-list">
          <Button
            inlineStyle={"BOLD"}
            title={"bold"}
            editorState={editorState}
            onClick={handleClick}
          />
          <Button
            inlineStyle={"ITALIC"}
            title={"italic"}
            editorState={editorState}
            onClick={handleClick}
          />
        </div>
        <div className="styles-list">
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
        <div className="styles-list">
          {Object.keys(FONTSIZE).map((size) => (
            <Button
              key={size}
              inlineStyle={size}
              title={size}
              editorState={editorState}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
      <div className="divider"></div>
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
