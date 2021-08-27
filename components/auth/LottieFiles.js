import React, { useEffect } from "react";
import { useRef } from "react";

export default function LottieFiles() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="/linkedin.json"
      style={{ width: "300px", height: "300px" }}
    ></lottie-player>
  );
}
