import React from 'react';


function Card(props: { imgsrc: string | undefined; 
    description: string | undefined; title: string; process:React.ReactNode }) {
    return (
        <div className="card">
        <h4>{props.title}</h4>
        <img src={props.imgsrc} style={{width:230,height:290,marginLeft:300}}/>
          <div className="card_info">
                <span className="card_category">{props.description}</span>
          </div>
    <div>{props.process}</div>
        </div>
    )
}

export default Card
