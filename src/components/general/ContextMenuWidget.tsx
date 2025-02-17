import { FC, ReactNode, useContext } from 'react';
import { LogoIcon } from '@/components/icons';
// import { GradientContext } from '@/components/context/GradientContext';


interface ContextMenuItem {
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    children?: Array<{ label: string; onClick?: () => void; icon?: ReactNode }>; // Nested content with icons
}


interface ContextMenuWidgetProps {
    items: ContextMenuItem[];
    visible: boolean;
    position: { x: number; y: number };
}

const ContextMenuWidget: FC<ContextMenuWidgetProps> = ({ items, visible, position }) => {

    return <>
        Hello
    </>
    // const context = useContext(GradientContext);
    // if (!context) {
    //     throw new Error("GradientContext must be used within a GradientProvider");
    // }
    // const { activeWord, gradients } = context;

    // if (!visible) return null;

    // return (
    //     <div
    //         className="absolute z-50 bg-[#111111] border-[0.5px]  border-gray-50/5 min-w-[250px] rounded shadow-lg"
    //         style={{ top: position.y, left: position.x }}
    //     >
    //         <div className={`${gradients[activeWord % gradients.length]}  font-semiibold flex items-center gap-x-2 leading-8 
    //         justify-center  text-white rounded-tl rounded-tr`}>
    //             <LogoIcon className="fill-white size-4" type="alone" />
    //             Akauntme coming soon...
    //         </div>

    //         <ul className="py-1 mx-2 px-2">
    //             {items.map((item, index) => (
    //                 <li key={index}>
    //                     <div
    //                         className={`flex items-center border-b-[0.5px] border-gray-600/20 shadow-sm text-gray-400 px-4 py-1 cursor-pointer ${item.children ? 'font-normal' : ''}`}
    //                         onClick={item.onClick}
    //                     >
    //                         {/* {item.icon && <span className="mr-2">{item.icon}</span>} */}
    //                         {item.label}
    //                     </div>
    //                     {item.children && (
    //                         <ul className="py-1">
    //                             {item.children.map((child, idx) => (
    //                                 <li
    //                                     key={idx}
    //                                     className="flex items-center text-white px-4 py-2 cursor-pointer rounded-md hover:bg-[#222]"
    //                                     onClick={child.onClick}
    //                                 >
    //                                     {child.icon && <span className="mr-2">{child.icon}</span>}
    //                                     {child.label}
    //                                 </li>
    //                             ))}
    //                         </ul>
    //                     )}
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default ContextMenuWidget;



