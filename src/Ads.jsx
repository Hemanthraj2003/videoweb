import { useEffect } from "react";

export const NativeBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//pl24540017.cpmrevenuegate.com/0843dcd6a04a91e68d695a784d15cc2c/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    const ads = document.getElementById("nativeBanner");
    if (ads) {
      ads.appendChild(script);
    }

    return () => {
      if (ads) {
        ads.removeChild(script);
      }
    };
  }, []);

  return <div id="nativeBanner"></div>;
};
