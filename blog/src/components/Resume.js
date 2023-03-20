import React from "react";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './Resume.pdf'

import "./../App.css";
// import SEResume from "./SEResume.html";

const Resume = () => {
    return (
        <div class="resume"> 
         <iframe src={pdfFile} frameborder="0" height="1000em" width="100%"></iframe>
        </div>
    )

}

export default Resume;