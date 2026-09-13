
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Technologies from "./components/technologies/Technologies"
import { Suspense } from "react"
import type { tech } from "./type/techType"

const technologiesFetch = async() : Promise<tech[]> =>{
  const res = await fetch('/technologies.json')
  const technologies = await res.json();
  return technologies
}
const technologiesPromise = technologiesFetch();

function App() {


  return (
    <>
    <Navbar />
    <Banner />
    <Suspense fallback={<h2>loading...</h2>}>
      <Technologies technologiesPromise={technologiesPromise} />
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
