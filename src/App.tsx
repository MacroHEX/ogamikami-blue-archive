// ::: react
//
import { useEffect, useState } from "react";

// ::: components
//
import MainLayout from "./layouts/MainLayout";
import YoutubePlayer from "./components/YoutubePlayer";

// :::
//
function App() {
  const [playerSize, setPlayerSize] = useState({ width: 0, height: 0 });

  const calculatePlayerSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const targetRatio = 16 / 9;

    const maxWidth = screenWidth * 0.6;
    const maxHeight = screenHeight * 0.6;

    let width, height;

    if (screenWidth >= screenHeight) {
      // Landscape orientation
      height = Math.min(maxHeight, maxWidth / targetRatio);
      width = height * targetRatio;
    } else {
      // Portrait or square orientation
      width = Math.min(maxWidth, maxHeight * targetRatio);
      height = width / targetRatio;
    }

    setPlayerSize({ width, height });
  };

  useEffect(() => {
    calculatePlayerSize();
    window.addEventListener("resize", calculatePlayerSize);
    return () => {
      window.removeEventListener("resize", calculatePlayerSize);
    };
  }, []);

  return (
    <>
      <MainLayout>
        <div className="border-8 rounded-xl border-blue-400 shadow-2xl">
          <YoutubePlayer
            width={playerSize.width}
            height={playerSize.height}
            src={"https://www.youtube.com/embed/0MlmsbEVoK4"}
            title={"Blue Archive"}
          />
        </div>
      </MainLayout>
    </>
  );
}

export default App;
