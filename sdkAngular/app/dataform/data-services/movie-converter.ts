import { PropertyConverter } from "nativescript-ui-dataform";
import { Movie } from "./movie";

// >> angular-dataform-converters-code
export class MovieConverter implements PropertyConverter {
    constructor(private _movies: Array<Movie>) { }
    
    convertFrom(id: number) {
        return this._movies.filter((movie: Movie) => movie.id == id)[0].name;
    }

    convertTo(name: string) {
        return this._movies.filter((movie: Movie) => movie.name == name)[0].id;
    }
}
// << angular-dataform-converters-code