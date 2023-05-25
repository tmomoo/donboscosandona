import Layout from "@/components/Layout";
import LandingHero from "components/LandingHero2.js";
import Products from "components/Products.js";

export default function Pagina () {
    return (
        <Layout>
            <LandingHero
  title='Home'
  imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6f/Dream_Island.jpg"
  opacity={ 0.35 }
  height="90"
/>


<Products
  title=''
  description="Sogni!"
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
        title: "Sogno di Cristiano Ronaldo",
        description: "",
        immagineUrl: "https://elcomercio.pe/resizer/_kKd2ICn-1HZfFS2dUSMro50a24=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7ZWZDCDHPFGWDENRGTP4737STQ.jpg",
        url: "/base",
        
    },
    {
        title: "Sogno di Dwayne Jhonson ",
        description: "",
        immagineUrl: "https://www.essence.com/wp-content/uploads/2015/03/images/2015/03/24/the-rock-shirtless-s-2.jpg?width=400",
        url: "/normale"
    },
    {
        title: "Sogno di Scarlet Johanson",
        description: "",
        immagineUrl: "https://www.tentazionemakeup.it/wp-content/uploads/2013/01/022711-scarlett-johansson-hair-400.jpg",
        url: "/intermedio"
    },
    {
        title: "Sogno di Diletta Leotta",
        description: "",
        immagineUrl: "https://biographymask.com/wp-content/uploads/2021/05/Diletta-Leotta.jpg",
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

