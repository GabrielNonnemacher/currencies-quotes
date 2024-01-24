export interface Currencie {
    acronym: string;
    name: string;
    fullName: string;
}

export class CurrencieDTO {
    static mapperDto = (acronym: string, name: string): Currencie => { 
        return {
            acronym: acronym,
            name: name,
            fullName: `${acronym} - ${name}` 
        };
    };
}
