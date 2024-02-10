import { NAME_CURRENCIES } from "../constants/currencies.constant";
import { Currencie } from "../models/currencie.model";

export class Functions {

    static allAcronymsCurrencies(): string[] {
        const response = [] as string[];
        NAME_CURRENCIES.forEach((elem: Currencie) => response.push(elem.acronym));

        return response;
    }

    static currenciesFiltereds(acronym: string, listMatches: string[]): Currencie[] {
        const acronymList = [] as string[];

        listMatches.forEach((elem: string) => {
            const pair = elem.split("-");
            const currencie = pair[0];
            const match = pair[1];

            if (currencie === acronym) {
                acronymList.push(match);
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

    static getCurrencies(acronymList: string[]): Currencie[] {
        return NAME_CURRENCIES.filter((elem: Currencie) => {
            return acronymList.includes(elem.acronym);
        });
    }
}