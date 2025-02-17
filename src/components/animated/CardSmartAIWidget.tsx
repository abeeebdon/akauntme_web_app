import React from "react";
import { motion } from "framer-motion";
import { LogoIcon } from "../icons";

interface PopupProps {
    show: boolean;
    onClose: () => void;
}


const CardSmartAIWidget: React.FC<PopupProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div
            className="absolute inset-0 bg-akauntme/20 bg-opacity-50  flex justify-center items-center"
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-lg  shadow-lg absolute bottom-[120px] right-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex flex-col">
                    <header className="px-2 rounded-t-md flex justify-between items-center bg-gradient-to-tr from-akauntme-2 to-cyan-500 ">
                        <div className="flex items-center text-white text-xs align-baseline">
                            <LogoIcon className="size-3 fill-white" type="alone" />
                        </div>
                        <div className="text-white text-xs font-base tracking-wide">Smart A.I</div>
                        <button
                            className=" text-white"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </header>

                    <div className="py-4 px-2 text-[10px] flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-1">

                            <div className="rounded-full bg-akauntme-2 p-2 text-white">
                                Ask <b className="tracking-wide">Smart</b> anything about your business be it:
                            </div>

                            <div className="mobile-custom-scrollbar py-1     flex items-center w-[230px] gap-x-5 justify-around mt-2 overflow-y-hidden overflow-x-auto whitespace-nowrap">
                                <div className="cursor-pointer hover:bg-akauntme hover:scale-95 transition-all  py-0.5 px-2 rounded-full bg-akauntme-2 text-white">
                                    Reports
                                </div>

                                <div className="cursor-pointer hover:bg-akauntme hover:scale-95 transition-all  py-0.5 px-2 rounded-full bg-akauntme-2 text-white">
                                    Sales
                                </div>

                                <div className="cursor-pointer hover:bg-akauntme hover:scale-95 transition-all  py-0.5 px-2 rounded-full bg-akauntme-2 text-white">
                                    Stocks
                                </div>



                                <div className="cursor-pointer hover:bg-akauntme hover:scale-95 transition-all  py-0.5 px-2 rounded-full bg-akauntme-2 text-white">
                                    Expenses
                                </div>
                            </div>

                        </div>


                        <div className="flex items-center gap-x-1">
                            <input placeholder="Ask me anything about you business" type="text" className="placeholder:text-[9px] py-1 text-xs border ring-0 focus:ring-0 border-gray-200 shadow-sm outline-none focus:outline-none rounded-md" />
                            <div>
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#50e6ff" d="M41.621,5.058l-35.9,12.281c-0.747,0.255-0.967,1.205-0.409,1.763l23.585,23.585c0.558,0.558,1.508,0.338,1.763-0.409l12.281-35.9C43.222,5.561,42.439,4.778,41.621,5.058z" /><path fill="#35c1f1" d="M17.105,30.895l11.792,11.792c0.558,0.558,1.508,0.338,1.763-0.409l12.281-35.9c0.141-0.408,0.015-0.808-0.248-1.071L17.105,30.895z" /><path fill="#199be2" d="M38,10L13,26.789V34c0,0.552,0.448,1,1,1h7.211L38,10z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h2 className="text-xl font-bold mb-4">

                </h2> */}
            </motion.div>
        </div>
    );
}
export default CardSmartAIWidget;

