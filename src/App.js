// INCLUDING
import Currencies from './components/Currencies';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContextContries from './data/ContextCountries';
import countries from './data/countries';
//APP_COMPONENT
function App() {
  console.log(countries());
  //DOM
  return (
    <ContextContries>
      <div className='App'>
        <Navbar />
        <div className='flex'>
          <Hero />
          <div></div>
        </div>
      </div>
    </ContextContries>
  );
}

export default App;
