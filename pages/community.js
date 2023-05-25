import Layout from "@/components/Layout";
import LandingHero from "components/LandingHero2.js";
import Products from "components/Products.js";

export default function Pagina () {
    return (
        <Layout>
            <LandingHero
  title='Community'
  imageUrl=""
  opacity={ 0.35 }
  height="90"
/>


<Products
  title=''
  description="Non lasciarti scappare queste fantastiche offerte!"
  products={ categorie }
  cardWidth={ 3 }
  borderRadius="10px"
/>

<br>

</br>

<hr>
</hr>
        </Layout>
    )
}



let categorie = [
    {
        title: "",
        description: "",
        immagineUrl: "",
        url: "/community"
        
    },
    
    {
        title: "Il nostro personale",
        description: "",
        immagineUrl: "https://www.gema.it/wp-content/uploads/2022/09/Il-processo-di-selezione-del-personale.jpg",
        url: "/community"
    },
    {
        title: "",
        description: "",
        immagineUrl: "",
        url: "/community"
    },
    {
        title: "",
        description: "",
        immagineUrl: "",
        url: "/community"
    }
]

let in_evidenza = [
    {
        title: "Drone ultraleggero Titan K12",
        category:"Leggeri",
        description: "Per volare senza limiti nel giardino di casa",
        immagineUrl: "https://t2.tudocdn.net/614729?w=1920",
        url: "/leggeri"
    }
]

