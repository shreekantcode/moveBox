import React, { useState } from "react";
import "./box.css";

const Box = () => {
    const [leftRight, setLetRight] = useState(0);
    const [upBottom, setUpBottom] = useState(0);

    const moveLeft = () => {
        setLetRight(leftRight - 50);
    };

    const moveRinght = () => {
        setLetRight(leftRight + 50);
    };

    const moveBottom = () => {
        setUpBottom(upBottom + 50);
    };

    const moveUp = () => {
        setUpBottom(upBottom - 50);
    };

    return (
        <>
            <div className="main_container">
                <button
                    onClick={moveUp}
                    className={`horizontal ${upBottom === 0 ? "cursor-not-allowed" : ""}`}
                    disabled={upBottom === 0 ? true : false}
                >
                    Up
                </button>
                <div className="container">
                    <button
                        onClick={moveLeft}
                        className={`vertical ${leftRight === 0 ? "cursor-not-allowed" : ""
                            }`}
                        disabled={leftRight === 0 ? true : false}
                    >
                        Left
                    </button>
                    <div className="main">
                        <div
                            className="box"
                            style={{
                                transform: `translate(${leftRight}px, ${upBottom}px)`,
                            }}
                        ></div>
                    </div>
                    <button
                        onClick={moveRinght}
                        className={`vertical ${leftRight === 450 ? "cursor-not-allowed" : ""
                            }`}
                        disabled={leftRight === 450 ? true : false}
                    >
                        Right
                    </button>
                </div>
                <button
                    onClick={moveBottom}
                    className={`horizontal ${upBottom === 450 ? "cursor-not-allowed" : ""
                        }`}
                    disabled={upBottom === 450 ? true : false}
                >
                    Bottom
                </button>
            </div>
        </>
    );
};

export default Box;
