
import './App.css'
import Home from './components/home/home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Sidbar from './components/sidbar/Sidbar';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';

function App() {

  return (
    <>
<Sidbar/>
<main>
<Home/>
<About/>
<Services/>
<Resume/>
<Portfolio/>
<Pricing/>
<Testimonials/>
<Blog/>
<Contact/>

</main>
    </>
  )
}

export default App
