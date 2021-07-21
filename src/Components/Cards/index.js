
import React from 'react';
import styles from "./Card.module.css"
const Cards = (props) => {
// console.log(props)
    const {Poster,Title,Year,imdbID}=props;

    return (
            <div className="card active-card"  key={imdbID}>
                <div className="card-img" >
                    <img src = {Poster} alt={Title}/>
                </div>
                <div className="text-card">
                    <h5>{Title}</h5>
                    <p>{Year}</p>
                </div>
            </div>

      );
}
 
export default Cards ;

