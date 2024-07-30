import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Feature from "./components/Feature.jsx";
import Workflow from "./components/Workflow.jsx";
import Price from "./components/Price.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
    return (
        <div>
        <Navbar/>
        <div className="max-w-7xl mx-auto pt-2 px-6">
            <Hero/>
        </div>
            <Feature/>
            <Workflow/>
            <Price/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}