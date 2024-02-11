import { NAME_CURRENCIES } from "../constants/currencies.constant";
import { Acronym, AcronymDTO } from "../models/acronym.model";
import { Currencie, CurrencieDTO } from "../models/currencie.model";

export class Functions {

    static allAcronymsCurrencies(): string[] {
        const response = [] as string[];
        NAME_CURRENCIES.forEach((elem: Currencie) => response.push(elem.acronym));

        return response;
    }

    static currenciesFiltereds(acronymCurrencie: string, listMatches: string[]): Currencie[] {
        const acronymList = [] as Acronym[];
        
        listMatches.forEach((elem: string) => {
            const pair = elem.split("-");
            const currencie = pair[0];
            const match = pair[1];
            const acronym = {} as Acronym;

            if (currencie === acronymCurrencie) {
                acronym.acronym = match;
                acronym.inverted = false;
                acronym.query = elem;
                acronymList.push(AcronymDTO.mapperDto(acronym));
            } 
            
            if(match === acronymCurrencie) {
                acronym.acronym = currencie;
                acronym.inverted = true;
                acronym.query = elem;
                acronymList.push(AcronymDTO.mapperDto(acronym));
            }
        });

        return this.getCurrencies(acronymList);
    }


    static extractXmlTags(xmlString: string): string[] {
        const regexXml = /<([^\/?!\s>]+)[\s>]/g;
        const matches = [] as string[];
        let match;

        while ((match = regexXml.exec(xmlString)) !== null) {
            matches.push(match[1]);
        }

        return matches;
    }

    static getCurrencies(acronymList: Acronym[]): Currencie[] {
        const response = [] as Currencie[];
        
        NAME_CURRENCIES.forEach((elem: Currencie) => {
            acronymList.forEach((acronym: Acronym) => {
                if(acronym.acronym === elem.acronym){
                    response.push(CurrencieDTO.mapperView(acronym, elem));
                }
            });
        });

        console.log(response);
        
        return response;
    }
}