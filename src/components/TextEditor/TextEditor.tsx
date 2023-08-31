import { Editor, EditorState, Modifier, RichUtils } from "draft-js";
import { useState } from "react";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";
import { Button } from "../Button/Button";
import { COLORS, FONTSIZE, customStyleMap } from "../../constants/customStyles";

export const TextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleClick = (style: string, type: Object) => {
    if (Object.keys(type).length > 0) {
      customStyleChange(style, type);
    } else {
      setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    }
  };

  const customStyleChange = (style: string, type: Object) => {
    // gets the current cursor/selection state
    const selection = editorState.getSelection();

    // removes the specified inline styles from the entire selected range and get the current one
    const nextContentState = Object.keys(type).reduce(
      (contentState, inlineStyle) => {
        return Modifier.removeInlineStyle(contentState, selection, inlineStyle);
      },
      editorState.getCurrentContent()
    );

    // returns a new EditorState object with the specified ContentState applied as the new currentContent
    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      "change-inline-style"
    );

    // returns an OrderedSet<string> that represents the "current" inline style for the editor
    const currentStyle = editorState.getCurrentInlineStyle();

    // returns true when the anchor and focus keys are
    // the same /and/ the anchor and focus offsets are the same
    if (selection.isCollapsed() && currentStyle) {
      nextEditorState = currentStyle.reduce((state, style) => {
        return RichUtils.toggleInlineStyle(state!, style!);
      }, nextEditorState);
    }

    if (!currentStyle.has(style)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, style);
    }
    setEditorState(nextEditorState);
  };

  return (
    <>
      <div className="styles-container">
        <div className="styles-list">
          <Button
            inlineStyle={"BOLD"}
            title={"bold"}
            editorState={editorState}
            type={{}}
            onClick={handleClick}
          />
          <Button
            inlineStyle={"ITALIC"}
            title={"italic"}
            editorState={editorState}
            type={{}}
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
              type={COLORS}
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
              type={FONTSIZE}
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
