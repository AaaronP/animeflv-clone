import { animeByState } from 'animeflv'

export default async function getCurrentAnimes() {
    const animes = await animeByState(1, 'default')

    return animes 
}