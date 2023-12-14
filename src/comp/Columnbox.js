import React from "react";
import Cardbox from "./Cardbox";


export default function Colbox({props}){
    return(
        <div className="colbox">
            <h4 id="status">Status</h4>  
            {console.log([props].data)};
                          
            {/* {props.map((item) => (
                <Cardbox id={item.id} title = {item.title} tag = {item.tag} />
            ))}                */}
        </div>
    );
};