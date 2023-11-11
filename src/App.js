import { Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Eshop from "./page/e-shop";
import Home from "./page/home";
import Panier from "./page/e-shop/panier/panier";
import Commande from "./page/e-shop/commande/commande";
import Connection from "./page/e-shop/connection/connection";
import Achat from "./page/e-shop/Achat/achat";
import Merci from "./page/e-shop/merci/merci";

// ICIIIIIIIIIIIIIIIIIIIIIIIIIII



export const panierContext = createContext();
const PanierProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);
  const [totale,setTotale]=useState()
  let prixT=0
  useEffect(()=>{
    for (let index = 0; index < panier.length; index++) {
        prixT+=(panier[index].prix*panier[index].quantite)
    }
    setTotale(prixT)
  },[panier])

  const addPanier = (value) => {
    let testAdd = false;
    for (let index = 0; index < panier.length; index++) { // boucle verifiant si le produit est deja dans le panier
      if (value.id === panier[index].id) {
        testAdd = true;
      }
    }
    if (testAdd === false) {
      value = { ...value, quantite: 1 }; // ajoute un index "quantite" au produit
      setPanier([...panier, value]);
    }
  };



  const [other,setOther]=useState()
  const [ittest,setittest]=useState({})
  const [actualUser,setActualUser]=useState({})
  const [usersList,SetUsersList]=useState([
    {nom:'judex',prenom:'tchad',identifiant:'judex@gmail.com',password:'judexjudex'},
    {nom:'riko',prenom:'menes',identifiant:'menes@gmail.com',password:'menes12'},
  ])

  const addSetOther=(valeurs)=>{
    setOther(valeurs)
  }

  const addNewUser=(newValeur)=>{
    let isIn=false
    for (let index = 0; index < usersList.length; index++) {
          if(newValeur.identifiant===usersList[index]['identifiant']){
            isIn=true
          }
    }
    if (!isIn) {
      delete newValeur.passwordConfirm
    SetUsersList([...usersList,newValeur])
    setActualUser(newValeur)
    }
    else{console.log('deja la');}
    
  }

  const deleteUser=(user)=>{
    let newList=usersList.filter((item)=>item.identifiant!==user)
    SetUsersList(newList)
    console.log(newList);
  }

  const deletePanier=(id)=>{
    let newPanier=panier.filter((item)=>item.id!==id)
    setPanier(newPanier)
    
 }

  const modPanier = (id, operateur) => {
    let newPanier = panier.map((item) => {
      if (item.id === id) {
        if (operateur === "plus") {
          item.quantite++;
        } else {
          if (item.quantite > 1) {
            item.quantite--;
          }
        }
      }
      return item;
    });
    setPanier(newPanier);
  };
  return (
    <panierContext.Provider value={{ ittest,setittest,panier, addPanier,deletePanier,modPanier,setPanier,SetUsersList,totale ,setActualUser,actualUser,usersList,addNewUser,deleteUser,other,setOther,addSetOther}}>
      {children}
    </panierContext.Provider>
  );
};


// ICIIIIIIIIIIIIIIIIIIIIIIIIIII







function App() {
  return (
    <div className="App">
      <PanierProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/E-Shop" element={<Eshop/>}/>
        <Route path="/panier" element={<Panier/>}/>
        <Route path="/commande" element={<Commande/>}/>
        <Route path="/connection" element={<Connection/>}/>
        <Route path="/achat" element={<Achat/>}/>
        <Route path="/merci" element={<Merci/>}/>
      </Routes>
      </PanierProvider>
    
    </div>
  );
}

export default App;
