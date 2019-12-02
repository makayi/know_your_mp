import React from 'react';
import {MPList} from '../components/MPDetails'

export default function Home(){

        return(
            <div className="container">
                <div className="row">
                   <div className="col-lg-12">
                      <ul>
                     {MPList}
                      </ul>
                   </div>
                </div>
            </div>
        )
    
}
