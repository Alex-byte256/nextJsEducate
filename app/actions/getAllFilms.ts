import {FilmsResponse} from "@/types";

export function getAllFilms ():Promise<FilmsResponse> {
    return fetch('https://swapi.dev/api/films',{cache:'no-store'}).then((res) => res.json())
}