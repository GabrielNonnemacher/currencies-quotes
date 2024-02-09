import { NAME_CURRENCIES } from "../constants/currencies.constant";
import { Currencie } from "../models/currencie.model";

export class Functions {

    static allAcronymsCurrencies(): string[] {
        const response = [] as string[];
        NAME_CURRENCIES.forEach((elem: Currencie) => response.push(elem.acronym));

        return response;
    }

    static currenciesFiltereds(params: string) {
        const response = [] as Currencie[];
        const s = NAME_CURRENCIES;

        switch (params) {
            case "BRL":
                s.forEach((elem: Currencie) => {
                    response.push(elem)
                });
                break;

            default:
                break;
        }

        return response;
    }


    static extrairMoedas(xml: string): { atual: string; convertida: string }[] {
        const inicioTag = '<XML>';
        const fimTag = '<XML>';
        const moedas: { atual: string; convertida: string }[] = [];
        
        let inicioIndex = xml.indexOf(inicioTag);
        let fimIndex = xml.indexOf(fimTag);
        
        while (inicioIndex !== -1 && fimIndex !== -1 && fimIndex > inicioIndex) {
            const valorMoeda = xml.substring(inicioIndex + inicioTag.length, fimIndex);
            const [moedaAtual, moedaConvertida] = valorMoeda.split('-');
            
            if (moedaAtual && moedaConvertida) {
                moedas.push({
                    atual: moedaAtual,
                    convertida: moedaConvertida
                });
            }
    
            // Avança para a próxima ocorrência
            inicioIndex = xml.indexOf(inicioTag, fimIndex);
            fimIndex = xml.indexOf(fimTag, inicioIndex);
        }
    
        return moedas;
    }
}