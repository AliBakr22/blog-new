import React, { useState } from "react";
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "../style.css";

export default function TextEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };
  const addImage = (url) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src: url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      " "
    );
    setEditorState(
      EditorState.forceSelection(
        newEditorState,
        newEditorState.getCurrentContent().getSelectionAfter()
      )
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      addImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const mediaBlockRenderer = (block) => {
    if (block.getType() === "atomic") {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  };

  const Media = (props) => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src } = entity.getData();
    return <img src={src} alt="" style={{ maxWidth: "100%" }} />;
  };

  return (
    <div className="editor-container">
      <input
        type="file"
        onChange={handleImageUpload}
        className="button-style me-2  text-start"
      />
      <button onClick={onBoldClick} className="button-style me-2">
        Bold
      </button>
      <button onClick={onItalicClick} className="button-style me-2">
        Italic
      </button>

      <div className="underline-write mx-auto rounded-2"> </div>

      <div className="editor">
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          blockRendererFn={mediaBlockRenderer}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}
