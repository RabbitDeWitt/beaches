import { Carousel, Destinations, Footer, Hero, Navbar, Selects } from "./pages";
import Search from "./pages/Search";



function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
