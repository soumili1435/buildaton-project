import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import BeautyAnalyzer from "@/components/BeautyAnalyzer";
import SalonCards from "@/components/SalonCards";
import Services from "@/components/Services";
import BridalPackages from "@/components/BridalPackages";
import HomeService from "@/components/HomeService";
import Testimonials from "@/components/Testimonials";
import OwnerDashboard from "@/components/OwnerDashboard";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import FaceAnalyzer from "@/components/FaceAnalyzer";

export default function Home(){

return(
<main>

<Navbar/>

<Hero/>

<BeautyAnalyzer/>

<FaceAnalyzer/>
<SalonCards/>

<Services/>

<BridalPackages/>

<HomeService/>

<Testimonials/>

<OwnerDashboard/>

<Footer/>

<ChatBot/>

</main>
)

}