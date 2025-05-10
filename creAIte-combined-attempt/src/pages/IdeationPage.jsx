import React, { useState } from 'react';
import './IdeationPage.css'; 

const Dropdown = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown"></label>
      <select
        id="dropdown"
        value={selected}
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option value="tiktok">Fit for TikTok</option>
        <option value="instagram">Fit for Instagram</option>
        <option value="youtube">Fit for Youtube</option>
        <option value="facebook">Fit for Facebook</option>
      </select>
    </div>
  );
};

const SplitScreen = () => {
  return (
    <div className="container">
      {/* Left Panel */}
      <div className="leftPanel">
        <h2>Suggested Results</h2>
        <div className="suggestButtBox">
          <button className="suggestButt">A Day in the Life</button>
          <button className="suggestButt">Script for Instagram Reels</button>
          <button className="suggestButt">SEO-Optimised Blog Titles</button>
          <button className="suggestButt">Reactions & Reviews</button>
          <button className="suggestButt">Top 10 Roundup</button>
          <button className="suggestButt">Thumbnail & Caption Pairing</button>
        </div>
        <h3>Mood Board Integration</h3>
        <textarea
          className="promptBox3"
          rows="5"
          placeholder="Enter a prompt (e.g. Design an instagram carousel with earthy tones for a wellness campaign."
        ></textarea>
        <button className='generateButton2'>Generate</button>
        <h3>Voice-to-Content Input</h3>
        <textarea
          className="promptBox3"
          rows="5"
          placeholder="Enter a prompt (e.g. Generate a 60-second script about the importance of storytelling in marketing."
        ></textarea>
        <button className='generateButton2'>Generate</button>
      </div>

      {/* Right Panel */}
      <div className="rightPanel">
        {/* Top Section: Content Visualizer */}
        <div className="visualizerSection">
          <h2>Content Visualizer</h2>
          <div className="visualizer">
            <img
              src="src/assets/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              alt="Visualizer"
              className="image"
            />
          </div>
          <button className="saveButton">Save Draft</button>
        </div>

        {/* Bottom Section: Input Options */}
        <div className="inputOptions">
          <div className="inputBox">
            <input className="promptBox" type="text" placeholder="Enter a prompt" />
            <button className="generateButton">Generate</button>
          </div>
          <div className="formatContainer">
          <h4>Platform</h4>
            <div className="platformBox">
              <Dropdown className="dropdown"/>
              <input className="formatInput" type="text" placeholder="Format"/>
            </div>
          </div>
          <div className="tagBox">
            <input className="tone" type="text" placeholder="Tone" />
            <button className="tag">Dramatic</button>
            <button className="tag">Futuristic</button>
            <button className="tag">Storyline</button>
            <button className="tag">Classic</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const IdeationPage = () => {
  return (
    <div>
        <SplitScreen></SplitScreen>
    </div>
  )
}

export default IdeationPage;