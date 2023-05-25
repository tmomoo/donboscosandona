import Layout from "@/components/Layout";
import LandingHero from "components/LandingHero2.js";
import Products from "components/Products.js";

export default function Pagina () {
    return (
        <Layout>
            <LandingHero
  title='Pagamento'
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
        </Layout>
    )
}



let categorie = [
    {
        title: "Pacchetto base",
        description: "Scegli il pacchetto avanzato per avere le nostre novità per i nuovi arrivati insesperti!",
        immagineUrl: "",
        url: "/base"
        
    },
    {
        title: "Pacchetto normale",
        description: "Scegli il pacchetto normale per avere buona parte delle nostre novità",
        immagineUrl: "",
        url: "/normale"
    },
    {
        title: "Pacchetto intermedio",
        description: "Scegli il pacchetto avanzato per avere tutte le novità del posto!",
        immagineUrl: "",
        url: "/intermedio"
    },
    {
        title: "Pacchetto avanzato",
        description: "Scegli il pacchetto avanzato per avere tutte le novità del posto!",
        immagineUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ww-1526311053.jpg",
        url: "/avanzato"
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

