import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Jumbotron />


        <ContactForm />
        <div className='founders'></div>
      </body>
    </div>
  );
}

export default App;
