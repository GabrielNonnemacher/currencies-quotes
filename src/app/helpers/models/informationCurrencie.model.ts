export interface InformationCurrencie {
    ask: string;
    bid: string;
    code: string;
    codein: string;
    create_date: string;
    high: string;
    low: string;
    name: string;
    pctChange: string;
    timestamp: string;
    varBid: string;
}

export class InformationCurrencieDTO {
    static mapperView = (params: InformationCurrencie): InformationCurrencie => {
        return {
            ask: params.ask,
            bid: params.bid,
            code: params.code,
            codein: params.codein,
            create_date: params.create_date,
            high: params.high,
            low: params.low,
            name: params.name,
            pctChange: params.pctChange,
            timestamp: params.timestamp,
            varBid: params.varBid
        };
    };
}