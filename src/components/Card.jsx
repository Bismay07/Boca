import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Progress } from "@nextui-org/progress";
import { motion } from "framer-motion"

const Card = ( {data, reference}) => {

  
  return (
    <>
      <motion.div drag dragConstraints={reference}  className="relative flex-shrink-0 w-60 h-72 bg-zinc-900 rounded-[40px] py-10 px-5 overflow-hidden">
        <FaRegFileAlt color="white" />
        <p className="text-sm text-zinc-200 leading-tight mt-5">
          {data.desc}
        </p>
        <div className="footer absolute w-full bottom-0 left-0">
          <div className="mb-3 flex justify-between items-center px-8 py-3 text-white">
            <h3>{data.fileSize}</h3>
            {data.close ? (
              <span className="w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full">
                <IoMdCloseCircleOutline size="1.25em" />
              </span>
            ): (
              <span className="w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full">
                <MdOutlineDownloading size="1.25em" />
              </span>
            )}
            
          </div>
          {data.tag.isOpen ? (
            <div className={`tag w-full ${data.tag.tagColor === "green" ? "bg-green-600" : "bg-blue-600"} py-2`}>
            <p className="text-md flex items-center justify-center text-white">{data.tag.tagTitle}</p>
          </div>
          ) : (
              // <div className="tag w-full bg-[#67676c] py-5">
              //   <Progress aria-label="Loading..." value={70} isIndeterminate className="max-w-lg" size='lg' color="primary"/>
              // </div>
              null
              
          )}
          
        </div>
      </motion.div>
    </>
  );
};

export default Card;
