import { Destinations, Hero, Navbar } from "./pages";
import Search from "./pages/Search";



function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
