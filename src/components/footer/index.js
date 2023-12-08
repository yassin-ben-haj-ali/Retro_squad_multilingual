import React from 'react'
import "./style.css";
import planetb from '../../img/planetb.avif'

export const Footer = () => {
  return (
    <>
     <div class="footer">
        <h1>
Temps de changer</h1>
        <img src={planetb}  className='footer-content'/>
        <div>
            <div className='message'>
                <h2 className='footer-footer'>Réveillez-vous!</h2>
                <p>Pour lutter contre le changement climatique, il est important de prendre conscience de ces habitudes et de chercher des moyens de les modifier pour réduire notre impact environnemental. Cela peut inclure des actions telles que l'utilisation des transports en commun, la réduction de la consommation de viande, le recyclage, l'achat de produits durables, et la réduction du gaspillage d'énergie et d'eau.</p>
            </div>
        </div>
        </div>
    </>
  )
}