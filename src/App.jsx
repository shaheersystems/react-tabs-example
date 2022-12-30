import "./App.css";
import HeroSection from "./components/HeroSection";
import Tabs from "./components/Tabs/Tabs";
function App() {
  return (
    <div className='App'>
      <HeroSection />
      <div className='max-w-5xl m-auto flex items-center justify-center'>
        <Tabs />
      </div>
    </div>
  );
}

export default App;
