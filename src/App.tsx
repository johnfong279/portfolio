import About from './components/About'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import SelectedWork from './components/SelectedWork'
import Services from './components/Services'
import TrustStrip from './components/TrustStrip'

const sectionClassName = 'py-20 md:py-28'
const containerClassName = 'mx-auto max-w-6xl px-6'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-700">
      <Navbar />
      <main>
        <section
          id="home"
          className={`${sectionClassName} overflow-hidden border-b border-neutral-200/70 pt-28 md:pt-36`}
        >
          <div className={containerClassName}>
            <Hero />
          </div>
        </section>

        <section className="border-b border-neutral-200/70 bg-white py-8">
          <div className={containerClassName}>
            <TrustStrip />
          </div>
        </section>

        <section id="work" className={`${sectionClassName} bg-neutral-50`}>
          <div className={containerClassName}>
            <SelectedWork />
          </div>
        </section>

        <section id="services" className={`${sectionClassName} bg-white`}>
          <div className={containerClassName}>
            <Services />
          </div>
        </section>

        <section id="process" className={`${sectionClassName} bg-neutral-50`}>
          <div className={containerClassName}>
            <Process />
          </div>
        </section>

        <section id="about" className={`${sectionClassName} bg-white`}>
          <div className={containerClassName}>
            <About />
          </div>
        </section>

        <section id="contact" className="bg-accent-500 py-20 text-white md:py-24">
          <div className={containerClassName}>
            <ContactCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
