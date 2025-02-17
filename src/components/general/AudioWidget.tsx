import React, { useRef, ReactElement } from "react";
interface AudioWidgetProps {
    src: string;
    icon: ReactElement
}


const AudioWidget: React.FC<AudioWidgetProps> = ({ src, icon }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            <button title='Account me' onClick={handlePlay}
                className='absolute -top-3 -right-4 rounded-full size-6 flex justify-center items-center bg-akauntme-deep border-2 border-white'>
                {icon}
            </button>

            <audio ref={audioRef} src={src} />
        </div>
    );

}

export default AudioWidget;