import './App.css';
import slika5 from "./img/head.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import React, { Component } from 'react';

export class Forma extends Component {
    state={
        ime: "Mate",
        prezime: "Matić",
        datumRodenja: "21.2.",
        mail: "mate@gmail.com",
    }
    onSubmit= e=> {e.preventDefault(); console.log("Forma je potvrđena", this.state.name)} 
    render() {
        return (

            <div className="App">
        <Header />


        <div className="navbars">
            <Link to="/">Naslovnica</Link>
        </div>

        <div className="head">
            <h1>Natjecanje za metalca mjeseca</h1>
        </div>

        <br />

        <div className="slika">
            <img src={slika5} />
        </div>

        <br />
        <br />

        <div>
            <h1>
                Dobrodošli na natjecanje za metalca mjeseca!
            </h1>
            <p>
                Kako bi ste se prijavili na natjecanje samo trebate
                upisati vase podatke u upit ispod, nakon toga dobit
                će te vaš osobni papir kojeg trebate isprintati i
                pratiti daljnje upute koje će biti poslane na vaš
                odabrani mail!
            </p>
        </div>

        <div className='forma'>
            <form>
                Ime: 
                <br/>
                <input placeholder='Mate' value={this.state.ime} onChange={e=> this.setState({ime: e.target.value})}/>
                <br/>
                Prezime: 
                <br/>
                <input placeholder='Matić' value={this.state.prezime} onChange={e=> this.setState({prezime: e.target.value})}/>
                <br/>
                Datum Rođenja: 
                <br/>
                <input placeholder='28.11.' value={this.state.datumRodenja} onChange={e=> this.setState({datumRodenja: e.target.value})}/>
                <br/>
                Mail: 
                <br/>
                <input placeholder='mate@gmail.com' value={this.state.mail} onChange={e=> this.setState({mail: e.target.value})}/>
                <br/>
                <br/>
                <button onClick={e=> this.onSubmit(e)}>Unesi</button>
            </form>
        </div>

        <hr/>

        <div className='ispis'>
            <table className='isp'>
                <tr>
                    <td><h1>vaš papir!</h1></td>
                </tr>
                <tr className='ime'>
                    <td className='td'>
                        Ime: {this.state.ime}
                    </td>
                    <td className='td'>
                        Prezime: {this.state.prezime}
                    </td>
                </tr>
                <tr>
                    <td className='td'>
                        Datum Rođenja: {this.state.datumRodenja}
                    </td>
                </tr>
                <tr>
                    <td className='td'>
                        Mail: {this.state.mail}
                    </td>
                </tr>
            </table>
        </div>

        <br/>

        <div className="navbars">
            <Link to="/pobjednik">Pobjednik prošlog mjeseca</Link>
        </div>

        <br/>

        <Footer />
    </div>
    );
    }
}

export default Forma;