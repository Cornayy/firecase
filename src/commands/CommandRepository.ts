import { Command } from './Command';

export class CommandRepository {
    private commands: Command[];

    constructor() {
        this.initialize();
    }

    initialize(): void {}

    find(flag: string): Command {
        return this.commands.find(({ context }) => context.flags.includes(flag));
    }

    all(): Command[] {
        return this.commands;
    }
}
