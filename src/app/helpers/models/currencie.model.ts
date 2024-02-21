export interface Currencie {
    codigo: number;
    codigoIata: string;
    codigoPais: number;
    codigoSistema: number;
    codigoSwift: string;
    dataHoraInclusao: string;
    dataHoraRegistro: number;
    genero: string;
    nome: string;
    nomeFormatado: string;
    nomeSingular: string;
    sigla: string;
    simbolo: string;
    tipo: string;
    tipoAtivo: string;
    fullName: string;
}

export class CurrencieDTO {
    static mapperView = (params: Currencie): Currencie => {
        return {
            codigo: params.codigo,
            codigoIata: params.codigoIata,
            codigoPais: params.codigoPais,
            codigoSistema: params.codigoSistema,
            codigoSwift: params.codigoSwift,
            dataHoraInclusao: params.dataHoraInclusao,
            dataHoraRegistro: params.dataHoraRegistro,
            genero: params.genero,
            nome: params.nome,
            nomeFormatado: params.nomeFormatado,
            nomeSingular: params.nomeSingular,
            sigla: params.sigla,
            simbolo: params.simbolo,
            tipo: params.tipo,
            tipoAtivo: params.tipoAtivo,
            fullName: params.nomeFormatado + " - " + params.sigla
        };
    };
}
