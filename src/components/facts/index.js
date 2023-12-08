import React from 'react'
import "./style.css";

export const Facts = () => {
  return (
    <div className='container'>
        <div>
            <h1>DID YOU EVER THINK ABOUT ?</h1>
            <p>Never have I ever :</p>
        </div>
        <div className='fact-container'>
            <h2 className='fact-title'>Utilisation de véhicules à essence ou diesel</h2>
            <p>La conduite de véhicules utilisant des carburants fossiles est l'une des principales sources d'émissions de gaz à effet de serre, en particulier de CO2.</p>
        </div>
        <div className='fact-container'>
            <h2 className='fact-title'>Consommation excessive d'énergie :</h2>
            <p>L'utilisation excessive d'électricité dans les foyers, notamment pour le chauffage et la climatisation, contribue à une consommation énergétique importante. Cela est particulièrement problématique si l'électricité est produite à partir de combustibles fossiles.</p>
        </div>
        <div className='fact-container'>
            <h2 className='fact-title'>Gaspillage alimentaire</h2>
            <p>Le gaspillage alimentaire n'est pas seulement un problème de gestion des déchets, mais aussi une source de gaz à effet de serre, en particulier lorsque les aliments se décomposent dans les décharges.</p>
        </div>
        <div className='fact-container'>
            <h2 className='fact-title'>Consommation de viande rouge</h2>
            <p>L'élevage de bétail, en particulier pour la viande rouge, est un contributeur majeur aux émissions de méthane, un gaz à effet de serre puissant. L'élevage nécessite également de grandes quantités de terres, d'eau et d'énergie.</p>
        </div>
        <div className='fact-container'>
            <h2 className='fact-title'>Utilisation de plastiques à usage unique </h2>
            <p> La production et l'élimination de plastiques, en particulier ceux à usage unique, nécessitent beaucoup d'énergie et contribuent à la pollution environnementale.</p>
        </div>

        <div className='fact-container'>
            <h2 className='fact-title'>Mauvaise utilisation des ressources en eau  </h2>
            <p> Une utilisation inefficace de l'eau, comme les longues douches ou le fait de laisser couler l'eau inutilement, peut augmenter la demande en énergie pour le traitement et le transport de l'eau.</p>
        </div>

        <div className='fact-container'>
            <h2 className='fact-title'>Achats non durables  </h2>
            <p>Acheter des produits avec une courte durée de vie ou fabriqués de manière non durable contribue à une plus grande empreinte carbone, en raison de la production, du transport et de l'élimination des produits.</p>
        </div>

        <div className='fact-container'>
            <h2 className='fact-title'>Non-recyclage </h2>
            <p>  Ne pas recycler ou composter peut augmenter la quantité de déchets envoyés dans les décharges, ce qui génère des gaz à effet de serre lors de leur décomposition.</p>
        </div>
    </div>
  )
}