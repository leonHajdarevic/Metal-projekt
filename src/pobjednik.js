import './App.css';
import { Link } from "react-router-dom";

function Pobjednik({pro}) {
  return (
    <div className="App">
        <div className="navbars">
            <Link to="/natjecaj">Nazad!</Link>
        </div>

        <br/>

        <div className='ispis'>
            <table className='isp'>
                <tr>
                    <td><h1>Pobjednik prošlog mjeseca!</h1></td>
                </tr>
                <tr className='ime'>
                    <td className='td'>
                        Ime: {pro.ime}
                    </td>
                    <td className='td'>
                        Prezime: {pro.prezime}
                    </td>
                </tr>
                <tr>
                    <td className='td'>
                        Datum Rođenja: {pro.datumRodena}
                    </td>
                </tr>
                <tr>
                    <td className='td'>
                        Mail: {pro.mail}
                    </td>
                </tr>
            </table>
        </div>
    </div>
  );
}

  export default Pobjednik;