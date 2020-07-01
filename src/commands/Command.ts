import { CommandContext } from './types/index';

export abstract class Command {
    public context: CommandContext;

    constructor(context: CommandContext) {
        this.context = {
            flags: context.flags || [],
            description: context.description || 'No description specified.',
        };
    }

    public abstract execute(dir?: string): void;
}
