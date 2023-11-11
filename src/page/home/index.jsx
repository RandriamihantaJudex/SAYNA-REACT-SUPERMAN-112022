import Navbar from "../../composant/navBar"
import "./homeStyle.css"

const TextAcceuil = () => {
    return <>
        <h1>SUPERMAN</h1>
        <h2>L HOMME D ACIER</h2>
    </>
}
export const Accueil = ({ children ,another}) => {
    return <div className="HM_First">
        <div className="icon_reseau">
            <img src="./icones/facebook.png" alt="" />
            <img src="./icones/instagram.png" alt="" />
            <img src="./icones/twitter.png" alt="" />
        </div>
        <img className="HM_logo_dc" src="./logos/logoDC.png" alt="" />
        <div className="img_superman_div">
            {children}
        </div>
    </div>
}


const Cinema = () => {
    const numbers1 = [2, 3, 4]
    const numbers2 = [5, 6, 7]
    const numbers3 = [8, 9, 10]
    return <div className="HM_cinema">
        <div className="cinema_contenu">
            <h3>SUPERMAN AU CINEMA</h3>
            <p>Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un
                vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta
                Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de
                fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine.

                Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs
                se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par
                Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son
                costume et devient Superman, l’homme d’acier aux yeux du monde.
            </p>
            <div className="cinema_image" >
                {numbers1.map(number => {
                    return <img src={"./images/img" + number + ".png"} alt="" srcset="" />
                })}

            </div>
            <h3>NÉMÉSIS</h3>
            <p>Superman mène une lutte sans fin contre de nombreux adversaires, son adversaire le plus connu étant le milliardaire Lex Luthor,
                fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui
                participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui souhaite tout détruire sur son
                passage, sera celui qui réussira à tuer Superman. Zod est un kryptonien qui fut condamné à l'emprisonnement dans la Zone
                Fantôme pour s'être insurgé contre les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman.
                Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus dangereux adversaires.
            </p>
            <div className="cinema_image" >
                {numbers2.map(number => {
                    return <img src={"./images/img" + number + ".png"} alt="" srcset="" />
                })}

            </div>
            <h3>ALLIES</h3>
            <p>Jor-El était le père biologique de Kal-El, ainsi que le savant le plus célèbre de Krypton et un membre influent du Conseil des
                Sciences. Lorsque Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El vers la
                Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark est pris en charge par Jonathan et
                Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera mort, Clark pourra compter sur le soutien indéféctible de sa
                mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane qui deviendra sa partenaire et son seul “véritable amour”
            </p>
            <div className="cinema_image" >
                {numbers3.map(number => {
                    return <img src={"./images/img" + number + ".png"} alt="" srcset="" />
                })}

            </div>
            <h3>BATMAN V SUPERMAN</h3>
            <p>Le monde n’est pas assez grand pour deux super héros. Alors que Superman se battait contre Zod, l’affrontement fait des dégats
                et détruit partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, impuissant, à l’effondrement de la
                ville qui fait beaucoup de victimes. Wayne est alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est
                inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, cet extraterrestre de Krypton, qui peut à lui
                seul détruire le monde d'une simple pichenette, décidera un jour de ne plus défendre la Terre, voire même de causer sa perte.
            </p>
            <p>
                De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. Ce dernier n'est plus que
                l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel à la suite du meurtre de son ancien partenaire Robin
                par le Joker, il n'hésite plus à violer son code moral en éliminant et marquant au fer les criminels. Superman souhaite simplement
                lui rappeler le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.
            </p>
            <h3 className="multimedia">MULTIMÉDIA</h3>
        </div>
        <div className="HM_multimedia">
            <img src="./icones/Polygon-1.png" alt="" />
            <div className="presentation_film">
                <img src="./images/img12.png" alt="" />
                <div>
                    <p>A c t i o n , A d v e n t u r e</p>
                    <p>Superman Man of Steel</p>
                    <p>IMDB: 7.1</p>
                    <p className="HM_p">Clark Kent, malgré son apparence humaine normale, est l'un
                        des derniers membres d'une race éteinte. Il se retrouve forcé
                        de révéler son identité lorsque la Terre est envahie par une
                        armée de survivants qui menacent détruire la planète.</p>
                </div>
            </div>
            <img src="./icones/Polygon.png" alt="" />
        </div>
    </div>
}

const Trailer = () => {
    return <div className="HM_trailer">
        <div className="trailer_content">
            <iframe class="framevideo" width="560" height="315" src="https://www.youtube.com/embed/gMLh7wS5Dsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
}

const Contact = () => {
    return <div className="HM_contact">
        <div className="contact_opacity ">
            <h1>Prenons contact</h1>
            <form >
                <label htmlFor="mail">ADRESSE EMAIL</label>
                <InputContact nom={'main'} place={'Adresse email'} />
                <label htmlFor="">NEWSLETTER</label>
                <label htmlFor="coche" className="lblCoche">En cochant cette case vous acceptez de recevoir l’actualité concernant les
                    aventures de Batman :</label>
                <input type="radio" name="coche" id="coche" />
                <InputContact nom={'FREQUENCE'} place={'Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter'} />
                <InputContact nom={'news'} place={'Souhaitez vous recevoir des news '} />
                <div className="buttonFormContact">
                    <button>Des films</button>
                    <button>Des comics</button>
                    <button>De tout</button>
                </div>
                <label htmlFor="message">MESSAGE</label>
                <InputContact nom={'news'} place={'Laissez un commentaire pour la communauté'} />
                <button type="submit">CONFIRMER</button>
            </form>
        </div>
    </div>

}

const Footer = () => {
    return <div className="HM_footer">
        <div className="footerContent">
            <div className="footer_premier">
                <img src="./icones/icon_guillemets_1.png" alt="Uneimage" />
            </div>
            <p>- Que représente le S ?</p>
            <p>- Ce n’est pas un S. Sur ma planète cela signifie espoir.</p>
            <p className="footer_titre_film">Man Of Steel, Lois Lane et Clark Kent.</p>
            <div className="liste_citation">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className="point_footer_white"></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <div className="footer_dernier">
                <img src="./icones/icon_guillemets_2.png" alt="Uneimage" />
            </div>
            <div className="fin">
                <div className="logo_wb">
                    <img src="./icones/icon_WB.png" alt="WB logo" />
                    <p>
                        Ce projet respecte l’univers cinématographique des films Batman
                        récents. Version Nolan & Snyder & Reeves
                    </p>
                </div>
                <div className="logo_fin">
                    <img
                        src="./icones/logo_sayna_white.png"
                        className="taille"
                        alt="logo de sayna"
                    />
                    <img src="./icones/icon_x.png" className="minii" alt="x" />
                    <img src="./icones/icon_DC.png" className="taille" alt="logo de DC" />
                    <img
                        src="./icones/facebook.png"
                        className="mini logo_RS"
                        alt="logo de facebook"
                    />
                    <img
                        src="./icones/instagram.png"
                        className="mini logo_RS"
                        alt="logo d'instagram"
                    />
                    <img
                        src="./icones/twitter.png"
                        className="mini logo_RS"
                        alt="logo de twitter"
                    />
                </div>
            </div>
        </div>
    </div>
}

const InputContact = ({ nom, place }) => {
    return <input type="text" name={nom} id={nom} className="inputContact" placeholder={place} />
}




function Home() {
    return <div>
        <Navbar />
        <div className="HM_conteneur">
            <Accueil><TextAcceuil/></Accueil>
            <Cinema />
            <Trailer />
            <Contact />
            <Footer />
        </div>

    </div>
}
export default Home