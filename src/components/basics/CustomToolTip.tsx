import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";

type TooltipProps = {
    content: string;
    children: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
};

const CustomToolTip: React.FC<TooltipProps> = ({ content, children, position = "top", }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getPositionClasses = () => {
        switch (position) {
            case "top":
                return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
            case "bottom":
                return "top-full mt-2 left-1/2 transform -translate-x-1/2";
            case "left":
                return "right-full mr-2 top-1/2 transform -translate-y-1/2";
            case "right":
                return "left-full ml-2 top-0.5 transform -translate-y-1/2";
            default:
                return "";
        }
    };


    const getArrowPositionClasses = () => {
        switch (position) {
            case "top":
                return "left-1/2 transform -translate-x-1/2 top-full";
            case "bottom":
                return "left-1/2 transform -translate-x-1/2 bottom-full";
            case "left":
                return "top-1/2 transform -translate-y-1/2 right-full";
            case "right":
                return "top-1/2 transform -translate-y-2 right-full";
            default:
                return "";
        }
    };


    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: position === "top" ? 10 : -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: position === "top" ? 10 : -10 }}
                    className={`absolute z-50 w-max bg-akauntme text-white text-[10px] tracking-wide px-2 py-1 rounded shadow-lg ${getPositionClasses()}`}
                >
                    {content}
                    {/* <div
                        className={`absolute w-3 h-3 bg-white rotate-45 transform ${getArrowPositionClasses()}`}
                    ></div> */}
                </motion.div>
            )}
        </div>
    );
};

export default CustomToolTip;
