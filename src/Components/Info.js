import React from "react";
import reactDom from "react-dom";
import Photo from "./Photo";
import PersonalInfo from "./PersonalInfo"
import ButtonEmail from "./ButtonEmail";
import ButtonLinkedin from "./ButtonLinkedin";

export default function Info(){
    return(
        <div>
            <Photo/>
            <PersonalInfo />
            <div className="buttonSection">
                <ButtonEmail />
                <ButtonLinkedin />
            </div>
        </div>
    )
}