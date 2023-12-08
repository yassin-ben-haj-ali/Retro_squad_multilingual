import React from 'react'
import "./style.css";
import Erth from '../../img/Erth.svg'

export const Banner = () => {
  return (
    <>
    {/* <select name="pets" id="pet-select" className='select-design' >
        <option value="">--Please choose an option--</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="it">Italy</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="ja">Japanese</option>
        <option value="hi">Hindi</option>
        <option value="tr">Turkish</option>
      </select> */}
    <div className='content'>
      
        <div class="banner">
            <h1 class="slide-left" >Qu'est-ce que <br/>Le changement climatique</h1>
            <p class="slide-left banner-def" ><br/>Le changement climatique désigne une modification durable des paramètres climatiques,
                    notamment des températures moyennes, des régimes de précipitations et des événements météorologiques extrêmes. 
        </p>
          
        </div>
        <div className='earth-img'>
               <img alt='earth' src={Erth}/> 
        </div>
    </div>
    </>
  )
}