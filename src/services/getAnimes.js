import { latestEpisodesAdded } from 'animeflv'

export default async function getAnimes() {
    const animes = await latestEpisodesAdded()
    console.log(animes)
    return animes
}