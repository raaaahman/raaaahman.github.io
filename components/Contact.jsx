import { useEffect, useRef, useState } from 'react'

function unrot(str)
{
    return String.fromCharCode(...str.split('').map(c => c.charCodeAt(0) - 13));
}

export default function Contact({ ...props }) {
    const [isHolding, setIsHolding] = useState(false);
    const [fillValue, setFillValue] = useState(0);
    
    const audioRef = useRef();

    const handleDown = () => {
        audioRef.current.play();
        setIsHolding(true);
    }

    const handleUp = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsHolding(false);
        setFillValue(0);
    }

    useEffect(() => {
        if (fillValue < 100 && isHolding) {
            const timeout = setTimeout(
                () => setFillValue(fillValue + 10),
                75
            );

            return () => {
                clearTimeout(timeout)
            };
        }   
    }, [isHolding, fillValue])
        
    return (<div {...props}>
        {fillValue >= 100 
            ? (<a
                className="block py-4 border border-transparent" 
                href={unrot("znvy\u0081|G\u0080\u0086y\u0083nv{Mqr\u0083v{qr\u0081nvy\u0080;p|z")}
            >
                {unrot("\u0080\u0086y\u0083nv{Mqr\u0083v{qr\u0081nvy\u0080;p|z")}
            </a>)
            : (<button
                className={"relative z-0 py-4 px-8 rounded-full bg-grey-darker bg-gradient-to-b from-white-5 border-white-10 border"}
                onMouseDown={handleDown}
                onKeyDown={handleDown}
                onMouseUp={handleUp}
                onKeyUp={handleUp}
                onBlur={handleUp}
            >
                <audio
                    ref={audioRef}
                    preload="auto"
                    loading="lazy"
                    style={{ display: "none" }}
                >
                    <source src="/sounds/maximize_051.mp3" type="audio/mpeg"/>
                    <source src="/sounds/maximize_005.ogg" type="audio/ogg"/>
                </audio>
                <span
                    role="presentation"
                    className={"absolute rounded-full z-5 top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-blue-deep from-15% via-purple-bright to-85% to-orange-bright [clip-path:var(--clip-value)] border border-blue-light" }
                    style={{
                        "--clip-value": `inset(0 ${100 - fillValue}% 0 0)`
                    }}
                />
                <span
                    className="relative z-10"
                >
                    Get in touch
                </span>
            </button>)
        }  
    </div>)
}