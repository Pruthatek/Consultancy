import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, ContentState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const UploadJob = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    jobTitle: "",
    img: "",
    jobType: "",
    timeline: "",
    location: "",
    desc1: "",
    desc2: "",
    task: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    setCompanyData({ ...companyData, task: JSON.stringify(rawContent) });
  };

  const [editorState2, setEditorState2] = useState(() =>
    EditorState.createEmpty()
  );
  const handleEditorChange2 = (editorState) => {
    setEditorState2(editorState);
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    setCompanyData({ ...companyData, skills: JSON.stringify(rawContent) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(companyData));
  };

  const formatContent = (task) => {
    try {
      const parsedContent = JSON.parse(task);
      return parsedContent.blocks
        .map((block) => block.text)
        .join("\n\n")
        .replace(/\n\n/g, "<br/><br/>")
        .replace(/\n/g, "<br/>");
    } catch (e) {
      return task;
    }
  };

  const formatContent2 = (skills) => {
    try {
      const parsedContent = JSON.parse(skills);
      return parsedContent.blocks
        .map((block) => block.text)
        .join("\n\n")
        .replace(/\n\n/g, "<br/><br/>")
        .replace(/\n/g, "<br/>");
    } catch (e) {
      return skills;
    }
  };
  return (
    <div className="w-full bg-black/90 h-fit pt-[100px] flex flex-col justify-center items-center">
      <p className="text-[40px] text-white font-poppins font-semibold text-center pb-10">
        Upload A Job
      </p>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[50%] md:w-[80%] w-[90%] mb-10 py-10 rounded-[20px] bg-white h-fit gap-y-5 flex flex-col items-center"
      >
        <input
          placeholder="Company Name"
          name="companyName"
          id="companyName"
          value={companyData.companyName}
          onChange={handleChange}
          className="w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />
        <input
          placeholder="Job Title"
          name="jobTitle"
          id="jobTitle"
          value={companyData.jobTitle}
          onChange={handleChange}
          className="w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />
        <div className="flex gap-x-5">
          <label>Upload Company Image</label>
          <input
            placeholder="Image"
            name="img"
            id="img"
            value={companyData.img}
            type="file"
            onChange={handleChange}
          />
        </div>
        <input
          placeholder="Job Type"
          name="jobType"
          id="jobType"
          value={companyData.jobType}
          onChange={handleChange}
          className="w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />
        <input
          placeholder="Timeline"
          name="timeline"
          id="timeline"
          value={companyData.timeline}
          onChange={handleChange}
          className="w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />
        <input
          placeholder="Location"
          name="location"
          id="location"
          value={companyData.location}
          onChange={handleChange}
          className="w-[90%] h-[50px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />
        <input
          placeholder="Description"
          name="desc1"
          id="desc1"
          value={companyData.desc1}
          onChange={handleChange}
          className="w-[90%] h-[80px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />
        <input
          placeholder="Description 2"
          name="desc2"
          id="desc2"
          value={companyData.desc2}
          onChange={handleChange}
          className="w-[90%] h-[80px] px-4 placeholder:text-black bg-white border border-black rounded-[10px] "
        />

        <p className="font-medium text-black text-[20px] text-left ">
          Task & Responsibilities
        </p>
        <div className="w-[90%] h-[80px] overflow-y-scroll px-4 placeholder:text-black bg-white border border-black rounded-[10px] ">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            editorState={editorState}
            onChange={handleEditorChange}
          />
        </div>
        <p className="font-medium text-black text-[20px] text-left ">
          Skills & Experience Required
        </p>
        <div className="w-[90%] h-[80px]  overflow-y-scroll px-4 placeholder:text-black bg-white border border-black rounded-[10px] ">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            editorState={editorState2}
            onChange={handleEditorChange2}
          />
        </div>

        <button className="w-[50%] h-[50px] bg-black text-white text-[20px] font-medium ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadJob;
