import { useEffect, useState } from "react"
import { PokemonService } from "../../service/pokemon-service/pokemon-service"
import { Card } from "../atoms/card/card"

type PokemonListType = {
    name: string
    url: string
}


export const Home = () => {
    const service = new PokemonService()

    const [pokemonList, setPokemonList] = useState<PokemonListType[]>()

    const fetch = async () => {
        await service.findAll().then((response) => {
            setPokemonList(response.results)
        }).catch((error) => {
            console.error('Resquest error')
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <div>
                <h1>Pokémon List</h1>
                <div style={{display: 'flex', flex:'flex-flow'}}>
                    {pokemonList?.map((pokemon) => (
                        <Card img={pokemon.url} title={pokemon.name} />
                    ))}
                </div>
            </div>
        </>
    )
}