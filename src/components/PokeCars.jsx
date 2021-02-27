import React,{Component} from 'react';
import {mockPokemonsData} from '../mock/pokeData';
import PokeCard from '../components/PokeCard';



class PokeCards extends Component{

    state={
        pokemons:mockPokemonsData.sort()
    }

    render(){

        return(
            <div>
                {
                    
                    this.state.pokemons
                    .sort((a, b) => a.name.localeCompare( b.name) )
                    .map(e=>
                      <PokeCard datapokemon={e} key={e.name}/>
                        
                        )

                }

            </div>

        )


    }



}


  export  default PokeCards;