import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Edit.css";

const EditPage = () => {
  const [captions, setCaptions] = useState([]);
  const [videoUrl, setVideoUrl] = useState(
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
  );
  const [suggestions, setSuggestions] = useState("");
  const [image, setImage] = useState(null);
  const [trimStart, setTrimStart] = useState("");
  const [trimEnd, setTrimEnd] = useState("");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const handleAddCaption = () => {
    setCaptions([
      ...captions,
      { start: "00:00:05", end: "00:00:10", text: "Sample Caption" },
    ]);
  };

  const generateImage = async (prompt) => {
    try {
      const response = await fetch("http://localhost:5000/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setImage(data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const getSuggestions = async (videoDescription) => {
    try {
      const response = await fetch("http://localhost:5000/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoDescription }),
      });
      const data = await response.json();
      setSuggestions(data.suggestion);
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
    }
  };

  const handleTrimVideo = async () => {
    try {
      const response = await fetch("http://localhost:5000/trim-video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl, trimStart, trimEnd }),
      });
      const data = await response.json();
      setVideoUrl(data.trimmedVideoUrl);
    } catch (error) {
      console.error("Error trimming video:", error);
    }
  };

  const handleApplyFilter = async (filter) => {
    try {
      const response = await fetch("http://localhost:5000/apply-filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoUrl, filter }),
      });
      const data = await response.json();
      setVideoUrl(data.filteredVideoUrl);
    } catch (error) {
      console.error("Error applying filter:", error);
    }
  };


  const handleGenerateImage = () => {
    const prompt = "A cinematic forest scene at sunrise";
    generateImage(prompt);
  };

  const handleAISuggestions = () => {
    const description = "A video about a forest scene with narration.";
    getSuggestions(description);
  };

  const handlePlaybackSpeed = (rate) => {
    setPlaybackRate(rate);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Unique Tools</h2>
        <ul>
          <li>
            <h4 onClick={handleGenerateImage}> Generate Images</h4>
            <p>Instantly create stunning, high-quality visuals tailored to your content.</p>
          </li>
          <li>
            <h4 onClick={handleAISuggestions}> AI Suggestions</h4>
            <p>Get intelligent recommendations to enhance your project’s quality and impact.</p>
          </li>
          <li>
            <h4>Content Preview</h4>
            <p>Visualize how your content appears across platforms like Instagram, YouTube, or LinkedIn.</p>
          </li>
          <li>
            <h4>Accessibility Tools</h4>
            <p>Streamline edits with tools that improve content inclusivity and ease of access.</p>
          </li>
          <li>
            <h4>Accessibility Suggestions</h4>
            <p>Ensure your content meets accessibility standards for all audiences.</p>
          </li>
          <li>
            <h4>Style & Branding Library</h4>
            <p>Save and apply your brand colors, fonts, and logos consistently across all edits.</p>
          </li>
        </ul>
      </aside>

    <div className="main">
      <div className="main-content">
        <h1>Edit Project</h1>
        <div className="video-preview">
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            playbackRate={playbackRate}
            muted={isMuted}
          />
        </div>
        <div className="video-tools">
          <div className="caption-tools">
            <h3>Closed Caption Text</h3>
            <textarea placeholder="Enter caption text..."></textarea>
            <button onClick={handleAddCaption}>Add Caption</button>
            <ul>
              {captions.map((caption, index) => (
                <li key={index}>
                  {caption.start} - {caption.end}: {caption.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="suggestions">
            <h3>AI Suggestions</h3>
            <p>{suggestions}</p>
          </div>
          <div className="trim-tools">
            <h3>Trim Video</h3>
            <input
              type="text"
              placeholder="Start time (e.g., 00:00:10)"
              value={trimStart}
              onChange={(e) => setTrimStart(e.target.value)}
            />
            <input
              type="text"
              placeholder="End time (e.g., 00:00:20)"
              value={trimEnd}
              onChange={(e) => setTrimEnd(e.target.value)}
            />
            <button onClick={handleTrimVideo}>Trim</button>
          </div>
          <div className="filter-tools">
            <h3>Filters</h3>
            <button onClick={() => handleApplyFilter("hue=s=0")}>
              Grayscale
            </button>
            <button onClick={() => handleApplyFilter("hue=s=1.5")}>
              Brighten
            </button>
          </div>
          <div className="playback-tools">
            <h3>Playback Speed</h3>
            <button onClick={() => handlePlaybackSpeed(0.5)}>0.5x</button>
            <button onClick={() => handlePlaybackSpeed(1)}>1x</button>
            <button onClick={() => handlePlaybackSpeed(1.5)}>1.5x</button>
            <button onClick={() => handlePlaybackSpeed(2)}>2x</button>
          </div>
          <div className="audio-tools">
            <h3>Audio</h3>
            <button onClick={handleMuteToggle}>
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-panel">
          <div className="bottom-panel-item">
            <h3>Content Checklist</h3>
            <p>Add captions and review visuals to ensure quality content.</p>
          </div>
          <div className="bottom-panel-item">
            <h3>Version Control & History</h3>
            <p>Save, view, or revert to previous versions of the selected project.</p>
          </div>
          <div className="bottom-panel-item">
            <h3>Collaboration</h3>
            <p>Invite team members to comment and approve your edits.</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default EditPage;
