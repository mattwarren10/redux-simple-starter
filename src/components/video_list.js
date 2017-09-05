import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  let size = 4
  const videoItems = props.videos.slice(0, size).map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
