export class PokemonService {

    private baseURL: string;

    constructor() {
        this.baseURL = 'https://pokeapi.co/api/v2/';
    }

    async findAll() {
        const response = await fetch(`${this.baseURL}pokemon`);
        return response.json();
    }

    async findOne(url: string) {
        const response = await fetch(url);
        return response
    }
}