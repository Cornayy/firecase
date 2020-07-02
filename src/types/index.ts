export interface CommandContext {
    flags: string[];
    description: string;
}

export interface CaseStrategy {
    transform(file: string): string;
}

export interface CaseStrategyOption {
    name: string;
    strategy: CaseStrategy;
}

export enum CaseOption {
    CamelCase = 'camel case',
    SnakeCase = 'snake case',
    KebabCase = 'kebab case',
    PascalCase = 'pascal case',
}
