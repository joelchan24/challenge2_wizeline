import React, { Component } from 'react';

class PokeCard extends Component {
    onMouseOver = (e, data) => {
        e.currentTarget.src = data.sprites.front_shiny === undefined ? data.sprites.back_shiny : data.sprites.front_shiny
    }
    onMouseOut = (e, data) => {
        e.currentTarget.src = data.sprites.front_default === undefined ? data.sprites.back_default : data.sprites.front_default
    }

    render() {
        let data = this.props.datapokemon;
        return (

            <div className="container" >
                <h1>{data.name}</h1>
                <img
                    src={data.sprites.front_default === undefined ? data.sprites.back_default : data.sprites.front_default}
                    alt="image"
                    onMouseOver={e => this.onMouseOver(e, data)}
                    onMouseOut={e => this.onMouseOut(e, data)}
                />

                <div>

                    <a target='_blank' href={data.videoLink} > {`Video of ${data.name} - Click Here`}</a>

                </div>
            </div>


        )
    }

}


export default PokeCard;