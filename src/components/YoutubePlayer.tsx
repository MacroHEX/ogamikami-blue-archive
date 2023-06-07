interface Props {
  width: number;
  height: number;
  src: string;
  title: string;
}

const YoutubePlayer = ({ width, height, src, title }: Props) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubePlayer;
