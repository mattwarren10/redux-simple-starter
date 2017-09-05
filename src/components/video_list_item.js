import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="d-flex mr-3" src={imageUrl} />
        </div>
        <div className="media-body">
          <h6 className="mt-0">
            {video.snippet.title}
          </h6>        
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
