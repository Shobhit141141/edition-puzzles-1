import { useEffect, useState, useRef } from "react";
import seaImg from "../assets/sea.jpg"

const Treasure = () => {
  const [sticker, setSticker] = useState<string | undefined>(undefined);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const [opacity, setOpacity] = useState(100);

  function getRandSticker() {
    const stickerCount = 4;
    const stickerPaths = Array.from(
      { length: stickerCount },
      (_, i) => `/stickers/image${i + 1}.png`
    );
    return stickerPaths[Math.floor(Math.random() * stickerPaths.length)];
  }

  useEffect(() => {
    setSticker(getRandSticker());
  }, []);

  const downloadSticker = () => {
    if (sticker && downloadLinkRef.current) {
      downloadLinkRef.current.href = sticker;
      downloadLinkRef.current.download =
        sticker.split("/").pop() || "sticker.png";
      downloadLinkRef.current.click();
    }
  };

  const handleClick = () => {
    setOpacity(10);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${seaImg})` }}>
      <div className="text-center">
        <p className="text-3xl font-bold text-white">
          Congratulations! You've found the treasure!
        </p>
        <div className="relative w-fit ml-auto mr-auto max-sm:ml-2 max-sm:mr-2 mt-5">
          <img src={sticker} alt="sticker" className="ml-auto mr-auto h-1/4" />
          <div className={`absolute top-0 left-0 bg-blue-200 rounded-xl h-full w-full text-blue-800 text-2xl font-semibold flex items-center justify-center ${opacity === 100 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 hover:cursor-pointer`} onClick={handleClick}>
            Tap to reveal
          </div>
        </div>
        <button
          onClick={downloadSticker}
          className="mt-4 px-4 py-2 bg-white text-blue-800 rounded hover:cursor-pointer"
        >
          Download Sticker
        </button>
        <a ref={downloadLinkRef} style={{ display: "none" }}>
          Download
        </a>
      </div>
    </div>
  );
};

export default Treasure;
