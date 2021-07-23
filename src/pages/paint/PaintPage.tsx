import React, { FC } from 'react';
import { Switch } from 'react-router';
import { Header } from '../../core/components/Header/Header';
import Canvas from './Canvas';

function PaintPage() {
    const isPaintPage = true;

    return (
        <div>
            <Header condition={isPaintPage} />
            <main className="paint-section">
                <div className="container">
                    <div className="paint-wrapper">
                        <div className="paint-control">
                            <div className="tool-section">
                                <div className="tool-section__title">
                                    Brush Color
                                </div>
                                <input type="color" className="btn--color" name="brush-color" id="brush-color" />
                            </div>
                            <div className="tool-section">
                                <div className="tool-section__title">
                                    Brush Width
                                </div>
                                <input type="range" className="btn--color" name="brush-width" id="brush-width" min="5" max="30" />
                            </div>
                            <div className="tool-section">
                                <div className="tool-section__title">
                                    Tools
                                </div>
                                <div className="tool-grid">
                                    <div>
                                        <button id="brush" className="tool-btn">
                                            <i className="fas fa-paint-brush"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button id="eraser" className="tool-btn">
                                            <i className="fas fa-eraser"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button id="line" className="tool-btn">
                                            <i className="fas fa-slash"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button id="circle" className="tool-btn">
                                            <i className="fas fa-circle"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <button id="rectangle" className="tool-btn">
                                            <i className="fas fa-square-full"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="tool-section">
                                <button id="canvas-save" className="btn btn--save">Save</button>
                            </div>
                            <div className="tool-section">
                                <button id="canvas-clear" className="btn">Clear</button>
                            </div>
                        </div>
                        <div className="paint-area">
                            <Canvas />
                        </div>
                    </div>
                </div>
                
            </main>
            <div id="img-cont"></div>
        </div>
    );
};



export default PaintPage;
