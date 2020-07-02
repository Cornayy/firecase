import {
    CamelCaseStrategy,
    PascalCaseStrategy,
    KebabCaseStrategy,
    SnakeCaseStrategy,
} from './../strategies';
import { CaseStrategyOption, CaseOption, CaseStrategy } from './../../types';

export class CaseStrategyFactory {
    private static instance: CaseStrategyFactory;
    private strategies: CaseStrategyOption[];

    constructor() {
        this.strategies = [
            { name: CaseOption.CamelCase, strategy: new CamelCaseStrategy() },
            { name: CaseOption.KebabCase, strategy: new PascalCaseStrategy() },
            { name: CaseOption.PascalCase, strategy: new KebabCaseStrategy() },
            { name: CaseOption.SnakeCase, strategy: new SnakeCaseStrategy() },
        ];
    }

    public static getInstance(): CaseStrategyFactory {
        if (!this.instance) this.instance = new CaseStrategyFactory();

        return this.instance;
    }

    public get(option: CaseOption): CaseStrategy {
        return this.strategies.find(({ name }) => name === option).strategy;
    }
}
