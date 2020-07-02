export interface CommandContext {
    flags: string[];
    description: string;
}

export enum CaseOption {
    CamelCase,
    SnakeCase,
    KebabCase,
    PascalCase,
}
