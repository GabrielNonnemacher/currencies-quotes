export interface InformationCurrencie {
    cotacaoBoletim: boolean;
    data: string;
    tipoMoeda: string;
}

export class InformationCurrencieDTO {
    static mapperDto = (params: InformationCurrencie): InformationCurrencie => {
        return {
            cotacaoBoletim: params.cotacaoBoletim,
            data: params?.data?.slice(0, 10),
            tipoMoeda: params.tipoMoeda
        };
    };
}