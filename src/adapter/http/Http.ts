    import { CountriesResponse } from "../../config/Responses/dataCountries";
    import { HttpError } from "./HttpError";

    interface Config {
        url_base : string;
    }

    export interface CountryInterface {
        getCountries( countrie : string ) : Promise<CountriesResponse[] | HttpError>;
    }

    export abstract class Http implements CountryInterface {
        protected url_base: string;

        constructor({url_base} : Config) {
            this.url_base = url_base;
        }

        abstract getCountries( countrie : string ) : Promise<CountriesResponse[] | HttpError> ;
    }