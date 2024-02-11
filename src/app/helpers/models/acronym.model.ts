export interface Acronym {
    acronym: string;
    query: string;
    inverted: boolean;
}

export class AcronymDTO {
    static mapperDto = (params: Acronym): Acronym => {
        return {
            acronym: params.acronym,
            query: params.query,
            inverted: params.inverted
        };
    };
}
