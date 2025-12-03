import Header from "./components/layout/Header"
import MainLayout from "./components/layout/Main.tsx"
import About from "./components/layout/About.tsx"
import Contact  from "./components/layout/Contanct.tsx"
import Footer from "./components/layout/Footer.tsx"

function App() {
  return (
    <>
      <Header />
      <MainLayout />
      <About />
      <Contact />
      <Footer />
    </>

  )
}

export default App
