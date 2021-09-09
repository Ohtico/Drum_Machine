import React, { Component } from 'react'
import Caja from './Caja';
import styled from 'styled-components'
import '../style/style.css';


let Direccion = 'https://heroku-mini-backet.herokuapp.com/bankOne',
    Direccion1 = 'https://heroku-mini-backet.herokuapp.com/bankOne',
    Direccion2 = 'https://heroku-mini-backet.herokuapp.com/BotonesEstadoTwo';

localStorage.getItem('Url') !== null ? Direccion = localStorage.getItem('Url') : Direccion = 'https://heroku-mini-backet.herokuapp.com/bankOne'

export default class Pegamento extends Component {

    constructor() {
        super();
        this.state = {
            Sound: []
        }
    }

    async componentDidMount() {
        let rest = await fetch(Direccion)
        let data = await rest.json()
        this.setState({ Sound: data })
        console.log(data);
    }

    handleClick(tenerLocal) {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", Direccion)
        etiquetaAudio.play()
    }

    render() {

        const Box = styled.div`
    background-color: grey;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    `
        const BoxContent = styled.div`
    background-color: gray;
    border: 10px solid yellow;
    width: 28vw;
    height: 70vh;
    padding: 10px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    `

        return (
            <Box>
                <BoxContent className="col-xl-4">
                    {this.state.Sound.map((Sound, index) => {
                        return (
                            <Caja
                                key={`${Sound}-${index}`}
                                Sounds={Sound}
                            />
                        )
                    })
                    }
                </BoxContent>
                <div class="switch-button">
                    <input type="checkbox" name="switch-button" id="switch-label"  onClick={() => {
                        if (Direccion === Direccion1) {
                            localStorage.setItem('Url', Direccion2);
                            window.location = "ReactDOM.render()"
                        } else if (Direccion !== Direccion1) {
                            localStorage.setItem('Url', Direccion1);
                            window.location = "ReactDOM.render()"
                        }
                    }
                    } className="switch-button__checkbox" />
                    <label for="switch-label" class="switch-button__label"></label>
                </div>
            </Box>
        )
    }
}
