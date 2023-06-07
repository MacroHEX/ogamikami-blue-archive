// :::

import { ReactElement } from "react";

//
interface Props {
  children: ReactElement | ReactElement[];
}

// :::
//
const MainLayout = ({ children }: Props) => {
  const gradientColors = {
    topLeft: "#bae5f5",
    topRight: "#c2e8f6",
    bottomLeft: "#e5e9f0",
    bottomRight: "#e0e7f1",
  };

  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${gradientColors.topLeft}, ${gradientColors.topRight}, ${gradientColors.bottomRight}, ${gradientColors.bottomLeft})`,
  };

  return (
    <>
      <main
        className="flex min-h-screen items-center justify-center"
        style={gradientStyle}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
