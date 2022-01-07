import React from "react";
import youtubeIcon from "../images/youtube-logo.png";
import githubIcon from "../images/github-icon.png";
export default function Footer(){
    return(
        <div className="footer">
            <a href="https://www.youtube.com/channel/UCeYYn1x6DlfCdGFAwB11EqA"><img className="iconsFooter" src={youtubeIcon}/></a>
            <a href="https://github.com/arielTheGreat"><img className="iconsFooter" src={githubIcon}/></a>
        </div>
    )
}