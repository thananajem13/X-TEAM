import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import BreadCrumb from './BreadCrumb';
import Accordion from './Accordion';
import FormValidation from './FormValidation';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <BreadCrumb />
      <Accordion />
      <FormValidation />
    </div>
  );
}

export default App;
