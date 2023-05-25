import Layout from "@/components/Layout";
import LandingHero from "components/LandingHero2.js";
import Products from "components/Products.js";
import Testimonials from "@/components/Testimonials";


export default function Pagina () {
    return (
        <Layout>
            <LandingHero
  title='Sogni'
  imageUrl="https://images5.alphacoders.com/507/507307.jpg"
  opacity={ 0.15 }
  height="90"
/>
<Testimonials
  title="Sogni"
  description="Sogni"
  imageUrl="https....."
  opacity={0.7}
  testimonials={ testimonials }
  cardWidth={ 6 }
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

let testimonials = [
    {
       title: "kdmnmfjk",
       name: "Cristiano Ronaldo",
       channel: "@Google",
       text: "Ringrazio l'azienda e lo staff per professionalità, disponibiltà e qualità nella professione per aver realizzato il mio sogno della Bugatti La Voiture Noire.",
       imageUrl: "https://elcomercio.pe/resizer/_kKd2ICn-1HZfFS2dUSMro50a24=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7ZWZDCDHPFGWDENRGTP4737STQ.jpg"
    },
    {
        name: "Dwayne Jhonson",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per professionalità, disponibiltà e qualità nella professione per aver realizzato il mio sogno della Bugatti La Voiture Noire",
        imageUrl: "https://www.essence.com/wp-content/uploads/2015/03/images/2015/03/24/the-rock-shirtless-s-2.jpg?width=400"
     },
     {
        name: "Scarlet Johanson",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per avermi fatto pas",
        imageUrl: "https://www.tentazionemakeup.it/wp-content/uploads/2013/01/022711-scarlett-johansson-hair-400.jpg"
     },
     {
        name: "Diletta Leotta",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per una vacanza stupenda passata assieme al mio fidanzato e quindi di aver realizzato il mio sogno.",
        imageUrl: "https://biographymask.com/wp-content/uploads/2021/05/Diletta-Leotta.jpg"
     },
    ]
let categorie = [
        {
            title: "Sogno di Cristiano Ronaldo",
            description: "",
            immagineUrl: "",
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

