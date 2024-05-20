export function getAllFilms ():Promise<FilmsResponse> {
    return fetch('https://swapi.dev/api/films').then((res) => res.json())
}