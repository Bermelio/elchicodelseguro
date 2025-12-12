import Header from "./components/layout/Header.tsx"
import MainLayout from "./components/layout/Main.tsx"
import About from "./components/layout/About.tsx"
import Contact  from "./components/layout/Contact.tsx"
import Footer from "./components/layout/Footer.tsx"
import MoreInfo from "./components/layout/MoreInfo.tsx"

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
