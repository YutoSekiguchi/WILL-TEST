import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import ready from "../scripts/BrushPalette.js";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Home />
      
      {/* <div className="app">
      <nav>
        <div>
          <img src="/images/btn_paper_03.jpg" title="Paper" className="Item Paper" onClick={dropDown.toggle('Papers')} alt="" />
  
          <label htmlFor="load_file" title="Import ink object"><img src="/images/btn_load.png" title="Load" alt="" /></label>
  
          <img src="/images/btn_save.png" title="Save" onClick={app.inkStorage.save()} alt="" />
  
          <span className="ColorBox Delimiter">
            <a href="javascript:void(0)" title="Color" className="Item Color" style={{backgroundColor: "#000000"}}>
              <input type="color" defaultValue="#000000" />
            </a>
          </span>
  
          <img src="/images/btn_clear.png" className="DelimiterRight" title="Clear" onClick={app.inkCanvas.clear()} alt="" />
  
          <span className="VectorPart">
            <img id="pen" src="/images/btn_tools/btn_pen.png" title="Pen" className="Tool" alt="" />
            <img id="felt" src="/images/btn_tools/btn_feather.png" title="Felt" className="Tool" alt="" />
            <img id="brush" src="/images/btn_tools/btn_brush.png" title="Brush" className="Tool" alt="" />
            <img id="marker" src="/images/btn_tools/btn_marker.png" title="Marker" className="Tool" alt="" />
  
            <img id="basic" name="basic" src="/images/btn_tools/btn_basic_brush.png" title="Basic" className="Tool PureVector DelimiterLeft" alt="" />
          </span>
  
          <span className="RasterPart">
            <img id="pencil" src="/images/btn_tools/btn_pencil.png" title="Pencil" className="Tool" alt="" />
            <img id="waterBrush" src="/images/btn_tools/btn_water_brush.png" title="Water Brush" className="Tool" alt="" />
            <img id="inkBrush" src="/images/btn_tools/btn_feather.png" title="Ink Brush" className="Tool" alt="" />
            <img id="crayon" src="/images/btn_tools/btn_crayon.png" title="Crayon" className="Tool" alt="" />
          </span>
  
          <img id="eraser" src="/images/btn_tools/eraser.png" className="Tool RasterPart DelimiterLeft" title="Eraser" alt="" />
  
          <span className="VectorPart PureVector DelimiterLeft">
            <img id="eraserStroke" src="/images/btn_tools/eraser_delayed_partial_stroke.png" className="Tool" title="Delayed Stroke Eraser" alt="" />
            <img id="eraserWholeStroke" src="/images/btn_tools/eraser_whole_stroke.png" className="Tool" title="Whole Stroke Eraser" alt="" />
          </span>
  
          <img id="selector" src="/images/btn_tools/btn_selector.png" className="Tool DelimiterLeft" title="Selector" alt="" />
  
          <span className="PureVector">
            <img id="selectorWholeStroke" src="/images/btn_tools/btn_selector_whole_stroke.png" className="Tool VectorPart" title="Whole Stroke Selector" alt="" />
          </span>
  
          <img id="customTool" src="/images/btn_tools/btn_toolconfig_tool.png" title="Custom Tool" className="DelimiterLeft Tool Disabled" alt="" />
          <label htmlFor="load_tool" title="Import tool"><img src="/images/btn_import_brush.png" alt="" /></label>
          <input id="load_tool" type="file" accept="application/protobuf; proto=WacomInkFormat3.Tool" onChange={app.inkStorage.import(this, 'tool')} />
  
          <div className="BackToMenu">
            <a href="javascript:void(0)" title="Toggle Pointer prediction" className="Button pointerPrediction" onClick={layout.toggleParam('pointerPrediction')}>PP</a>
            <a href="javascript:void(0)" title="Toggle downsampling" className="Button downsampling" onClick={layout.toggleParam('downsampling')}>DS</a>
            <img src="/images/btn_back.png" title="Back to menu" onClick={app.redirect()} style={{cursor: "pointer"}} alt="" />
          </div>
        </div>
  
        <div className="DropDown Papers" style={{visibility: "hidden"}}>
          <img src="/images/dropdown_arrow.png" className="Arrow" alt="" />
          <img id="paper_01" src="/images/btn_paper_01.jpg" className="Item Paper" alt="" />
          <img id="paper_02" src="/images/btn_paper_02.jpg" className="Item Paper" alt="" />
          <img id="paper_03" src="/images/btn_paper_03.jpg" className="Item Paper Selected" alt="" />
        </div>
      </nav>
  
      <div className="Wrapper">
        <h3 className="title"></h3>
        <h5 className="identity">
          <span id="APPName"></span>
          <span id="APPVersion"></span>,
          powered by digital-ink
          <span id="SDKVersion"></span>
        </h5>
  
        <canvas className="layer-transforms" style={{display: "none"}} onContextMenu={event.preventDefault()}></canvas>
  
        <canvas id="surface" onContextMenu={event.preventDefault()}></canvas>
        <canvas id="raster-runtime" style={{display: "none"}} onContextMenu={event.preventDefault()}></canvas>
  
        <div className="selection selection-vector" style={{display: "none"}}></div>
        <div className="selection selection-raster" style={{display: "none"}}></div>
  
        <div className="preloader" style={{display: "none"}}>
          <div className="flex-wrapper">
            <div className="progress flex-wrapper">
              <div className="value"></div>
            </div>
            <div className="message"></div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="flex-wrapper Overlay" style={{display: "none"}} onClick={this.style = 'display: none'}>
      <div className="Dialog" onClick={event.stopPropagation()}></div>
    </div>*/}
    </div> 
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
