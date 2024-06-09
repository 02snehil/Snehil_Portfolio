import React from "react";
import { stats } from "../Data";
import parse from 'html-react-parser'
const Stats = ()=>{
    return(
    <>
    {stats.map(({no, title, icon}, index)=>{
        return(
            <div className="stats__box" key={index}>
                <h3 className="stats__no">{no}</h3>
                <p className="stats__title">{parse(title)} &emsp;
                 <span className="stats__icon">{icon}</span>
                </p>
            </div>
        )
    })}
    </>
    )
}
export default Stats;