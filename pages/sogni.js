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
  image=""
  opacity={0.7}
  testimonials={ testimonials }
  cardWidth={ 6 }
/>






<br>

</br>
        </Layout>
    )
}

let testimonials = [
    {
        name: "Viaggio al centro della Terra.",
       title: "kdmnmfjk",
       
       
       channel: "@Google",
       text: "Il nucleo terrestre a pochi metri da te, grazie a noi è possibile.",
       imageUrl: "/images/centroterra.jpg"
    },
    {
        name: "Corsa spaziale.",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per professionalità, disponibiltà e qualità nella professione per aver realizzato il mio sogno della Bugatti La Voiture Noire",
        imageUrl: "/images/car space.jpg"
     },
     {
        name: "L'isola che non c'è.",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per avermi fatto pas",
        imageUrl: "/images/peterpsan.jpg"
     },
     {
        name: "Esplora l'abisso.",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per una vacanza stupenda passata assieme al mio fidanzato e quindi di aver realizzato il mio sogno.",
        imageUrl: "/images/water.jpg"
     },
     {
        name: "Giurassico",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per una vacanza stupenda passata assieme al mio fidanzato e quindi di aver realizzato il mio sogno.",
        imageUrl: "/images/dinosaurui.jpg"
     },
     {
        name: "Guerre Stellari",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per una vacanza stupenda passata assieme al mio fidanzato e quindi di aver realizzato il mio sogno.",
        imageUrl: "/images/race navicelle.jpg"
     },
     {
        name: "Salpa con Jack Sparrow.",
        channel: "@Google",
        text: "Ringrazio l'azienda e lo staff per una vacanza stupenda passata assieme al mio fidanzato e quindi di aver realizzato il mio sogno.",
        imageUrl: "/images/ship pirate.jpg"
     },
     {
        name: "Castello di Bowser.",
        channel: "@Google",
        text: "Salva la principessa Peach dal cattivone Bowser.",
        imageUrl: "/images/infernus 1.jpg"
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

