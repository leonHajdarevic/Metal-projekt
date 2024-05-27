import './App.css';
import Pobjednik from "./pobjednik";;

function Objekt() {
    let marko= {
        ime: 'Marko',
        prezime: 'Mrkulić',
        datumRodena: 20.6,
        mail: 'marko26@gmail.com'
    }
  return (
    <div className="App">
        <Pobjednik pro= {marko}/>
    </div>
  );
}

  export default Objekt;