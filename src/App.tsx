import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { FacebookFeed } from './components/FacebookFeed'
import { AudioPlayer } from './components/AudioPlayer'

function App() {
  return (
    <main className="min-h-screen py-10 px-4 md:px-8">
      <Hero />
      <Marquee />
      <About />
      <Categories />
      <Products />
      <FacebookFeed />
      <AudioPlayer />
    </main>
  )
}

export default App
