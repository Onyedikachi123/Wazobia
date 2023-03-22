import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Card } from "react-bootstrap";


const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [label, setLabel] = useState("This is a title");
  const [editMode, setEditMode] = useState(false);

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleLabelKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setEditMode(false);
    }
  };

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
  ];

  return (
    <Card style={{ margin: "50px auto", maxWidth: "800px" }}>
      <Card.Header style={{ height: "30px" }}></Card.Header>
      <Card.Body>
        {editMode ? (
          <input
            type="text"
            className="text-area-label"
            value={label}
            onChange={handleLabelChange}
            onKeyDown={handleLabelKeyDown}
          />
        ) : (
          <div className="text-area-label" onClick={() => setEditMode(true)}>
            <b>{label}</b>
          </div>
        )}
        <ReactQuill
          value={editorHtml}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder="Write something amazing..."
          style={{marginTop: "20px"}}
        />
      </Card.Body>
    </Card>
  );
};

export default RichTextEditor;
