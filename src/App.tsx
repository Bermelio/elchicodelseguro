import Header from "./components/layout/Header"
import MainLayout from "./components/layout/Main"
import About from "./components/layout/About"
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer"
import MoreInfo from "./components/layout/MoreInfo"

function App() {
  return (
    <>
      <Header />
      <MainLayout />
      <About />
      <MoreInfo/>
      <Contact />
      <Footer />
    </>

  )
}

export default App
