import { CommandContext, CaseOption } from '../types/index';

export abstract class Command {
    public context: CommandContext;

    constructor(context: CommandContext) {
        this.context = {
            flags: context.flags || [],
            description: context.description || 'No description specified.',
            casing: CaseOption.PascalCase,
        };
    }

    public abstract execute(dir?: string): void;
}
