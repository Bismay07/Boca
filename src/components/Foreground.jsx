import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "account desert native seen leader instant grandfather outside warn love growth knew best choice being arrange seems broad tail important diameter dangerous river fighting",
      fileSize: "0.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "slow fuel them naturally name temperature son review hay airplane door moment first fight cover tribe tightly alphabet explanation measure interior with success source",
      fileSize: "0.4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      desc: "you period neighborhood national taste lamp fresh today canal electric bad perhaps weak boat shells slip century trick struggle has factor also sunlight colony",
      fileSize: "0.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "gift bean including connected flame never hope neighborhood fear selection hole swimming proper on popular nearest very pride weather habit threw slabs broad branch",
      fileSize: "0.4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];
  return (
    <>
      <div ref={ref}  className="fixed top-0 left-0 w-full h-full z-[3] flex gap-5 flex-wrap p-4">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
