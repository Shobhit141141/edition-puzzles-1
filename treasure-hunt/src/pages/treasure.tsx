import { useEffect, useState, useRef } from "react";

const Treasure = () => {
  const [sticker, setSticker] = useState<string | undefined>(undefined);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

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

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">
          Congratulations! You've found the treasure!
        </p>
        <img src={sticker} alt="sticker" />
        <button
          onClick={downloadSticker}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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
