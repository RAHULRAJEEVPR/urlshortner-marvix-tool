import React, { useState } from "react";
import axios from "axios";
import urlimg from "../assets/images/urlshortner.jpg";
export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied,setcopied]=useState(false)

  const handleShorten = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/shorten", {
        originalUrl,
      });
      setShortenedUrl(response.data.shortenedUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  const handleCopy = () => {
    // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = shortenedUrl;

    // Append the textarea to the DOM
    document.body.appendChild(tempTextArea);

    // Select and copy the content
    tempTextArea.select();
    document.execCommand("copy");
setcopied(true)
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
  };
  const shoterRef = React.createRef();
  return (
    <main className="mt-5">
      <div className="mx-[10%]">
        <div>
          <div className="grid grid-cols-2 items-center">
            <div className="lg:col-span-1 col-span-2">
              <h1 className="lg:text-5xl text-2xl">
                Free URL shortner - <strong>Marvix Solutions</strong>{" "}
              </h1>
              <h2 className="mt-2 lg:text-lg">Effortless URL shortening with Marvix Solutions. Simplify links, amplify convenience. </h2>
              <button   onClick={() => {
              shoterRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }} className="bg-[#D13242] mt-3 text-white uppercase px-2 py-2 rounded-md font-bold">get Started</button>
            </div>
            <div className="lg:col-span-1 col-span-2 flex w-full">
              <img src={urlimg} alt="img" className="h-4/6 animate-jump" />
            </div>
          </div>
          <div id="shoter" className="mt-5 mb-44" ref={shoterRef}>
          <h2 className="font-semibold text-lg">{" URL :"}</h2>
          
          <div className="w-full flex gap-2 mt-3">
            <input
              type="text"
              placeholder="Enter URL"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              className="border w-full py-3 px-5 rounded-md"
            />
            <button
              onClick={handleShorten}
              className="border px-5 text-lg rounded-md font-semibold bg-[#D13242] text-white active:bg-gray-500 active:outline-none focus:outline-none"
            >
              Shorten
            </button>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-lg">{"Shortened URL:"}</h2>
            <div className="mt-3 flex flex-row gap-2">
              <input
                type="text"
                readOnly
                value={shortenedUrl}
                className="border w-full py-3 px-5"
              />
              <button
                onClick={handleCopy}
                className="border px-8 text-lg rounded-md font-semibold bg-[#D13242] text-white active:bg-gray-500 active:outline-none focus:outline-none"
              >
                Copy
              </button>
            </div>
            <div className="flex justify-end  mt-2">
{
    copied&&
            <p className="text-lime-500 font-semibold text-lg">Copied!</p>
}
            </div>
          </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
