import Layout from "@/components/Layout";
import LandingHero from "components/LandingHero2.js";
import Products from "components/Products.js";

export default function Pagina () {
    return (
        <Layout>
            <LandingHero
  title='Dream island '
  imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6f/Dream_Island.jpg"
  opacity={ 0.35 }
  height="100"
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
        </Layout>
    )
}


let categorie = [
    {
        title: "Pacchetto base",
        description: "",
        immagineUrl: "",
        url: "/base"
        
    },
    {
        title: "Pacchetto normale",
        description: "Il tuo primo drone, sotto i 250g non ti serve la licenza per pilotarlo!",
        immagineUrl: "",
        url: "/normale"
    },
    {
        title: "Pacchetto intermedio",
        description: "Scegli il pacchetto intermedio per avere ",
        immagineUrl: "https://romoletto.altervista.org/wp-content/uploads/2019/10/Isola-isole-Interpretazione-dei-sogni.jpg",
        url: "/intermedio"
    },
    {
        title: "Pacchetto avanzato",
        description: "Scegli il pacchetto avanzato per avere tutte le novità del posto!",
        immagineUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ww-1526311053.jpg",
        url: "/avanzato"
    }
]


