import  React from  "react";
import {MPS} from  '../data/mps';

export const MPDetails=(props)=>(
    <div className="card" style={{width:"18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{props.mp.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.mp.constituency}</h6>
        <p className="card-text">{props.mp.phone}</p>
        <p className="card-text">{props.mp.email}</p>
      </div>
    </div>
    )
    
export  const MPList= MPS.map((mps)=>(
  <MPDetails mp={mps} />
))

