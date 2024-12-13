import axios from "axios";
import { Http } from "./Http";
import { HttpError } from "./HttpError";
import { CountriesResponse, CountryData } from "../../config/Responses/dataCountries";


export class HttpAxios extends Http{
    async getCountries(continent: string): Promise<CountriesResponse[]  | HttpError> {
        try {
            const {data} = await axios.get<CountriesResponse[] >(`${this.url_base}/v3.1/region/${continent}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}