import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'

const About = () => {
   return (
      <>
         <div className="container">
            <Header />
            <Banner src="/img/banner2.png" />
            <Collapse label="Fiabilité">
               <p className="collapse-content">
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conforme au logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
               </p>
            </Collapse>
            <Collapse label="Respect">
               <p className="collapse-content">
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
               </p>
            </Collapse>
            <Collapse label="Service">
               <p className="collapse-content">
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
               </p>
            </Collapse>
            <Collapse label="Responsabilité">
               <p className="collapse-content">
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
               </p>
            </Collapse>
         </div>
         <Footer position="bottom" />
      </>
   )
}

export default About
