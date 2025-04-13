import React from "react";
import "./CoverViewer.css";
import GeniusLogo from "./../assets/Genius-logo.png";

interface CoverViewerProps {
  covers: string[];
  index: number;
  geniusLink: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const CoverViewer: React.FC<CoverViewerProps> = ({ covers, index, geniusLink, onClose, onNext, onPrev }) => {
  return (
    <div className="cover-viewer-overlay" onClick={onClose}>
      <div className="cover-viewer-content" onClick={(e) => e.stopPropagation()}>
        <div className="cover-viewer-body">
          <img
            src={covers[index]}
            alt={`Cover ${index}`}
            className="cover-viewer-image"
          />
        </div>

        <a
          href={geniusLink}
          target="_blank"
          rel="noopener noreferrer"
          className="genius-logo-link"
        >
          <img
            src={GeniusLogo}
            alt="Genius Logo"
            className="genius-logo"
          />
          <span className="genius-hover-label">Explore on Genius</span>
        </a>

        {index < covers.length - 1 && (
          <div className="arrow right" onClick={onNext} />
        )}
        {index > 0 && (
          <div className="arrow left" onClick={onPrev} />
        )}
      </div>
    </div>
  );
};

export default CoverViewer;
