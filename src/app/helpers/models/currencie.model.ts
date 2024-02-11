import { Acronym } from "./acronym.model";

export interface Currencie {
    acronym: string;
    name: string;
    fullName: string;
    inverted: boolean;
    query: string;
}

export class CurrencieDTO {
    static mapperDto = (acronym: string, name: string): Currencie => { 
        return {
            acronym: acronym,
            name: name,
            fullName: `${acronym} - ${name}` 
        } as Currencie;
    };

    static mapperView = (params: Acronym, currencie: Currencie): Currencie => {
        return {
            acronym: params.acronym,
            name: currencie.name,
            fullName: currencie.fullName,
            inverted: params.inverted,
            query: params.query
        };
    };
}
