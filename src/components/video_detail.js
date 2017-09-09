import React from "react";
import { FormattedDate } from 'react-intl';
import LoadingIcon from "./loading_icon"

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div id="loading-icon">
        <LoadingIcon />
      </div>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
        <div className="published-at">
          <FormattedDate
            value={new Date(video.snippet.publishedAt)}
            day="numeric"
            month="long"
            year="numeric" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
