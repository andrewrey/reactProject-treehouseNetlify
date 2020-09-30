import React from "react";
import Gif from "./Gif";

const GifList = ({ data }) => {
  let gifs = data.map((item) => <Gif url={item.images.fixed_height.url} key={item.id} />);
  return <ul className="gif-list">{gifs}</ul>;
};

export default GifList;
