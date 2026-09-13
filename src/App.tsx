
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Technologies from "./components/technologies/Technologies"

const technologiesFetch = async()=>{
  const res = await fetch('/technologies.json')
  const technologies = await res.json();
  return technologies
}


function App() {
  const technologiesPromise = technologiesFetch 

  return (
    <>
    <Navbar />
    <Banner />
    <Technologies technologiesPromise={technologiesPromise} />
    <Footer/>
    </>
  )
}

export default App
