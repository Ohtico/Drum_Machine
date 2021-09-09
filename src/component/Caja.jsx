import React, { Component } from 'react'

export default class Caja extends Component {


    handleClick(url) {
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", url)
        etiquetaAudio.play()
    }

    render() {

        const { url, keyTrigger } = this.props.Sounds;

        return (
            <div>
                <div>
                    <input
                        className="btn btn-danger p-4 m-3"
                        type="button"
                        value={keyTrigger}
                        onClick={() =>
                            this.handleClick(url)}

                    />
                </div>
            </div>

        )
    }
}
