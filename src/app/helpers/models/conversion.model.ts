export interface Conversion {
    name: string;
    value: number;
}

export class ConversionDTO {
    static mapperView = (params: Conversion): Conversion => {
        return {
            name: params.name,
            value: params.value
        };
    };
}
