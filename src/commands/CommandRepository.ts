/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path';
import { Command } from './Command';
import { options, extension } from './../config/config';
import { readdirSync } from 'fs';

export class CommandRepository {
    private static instance: CommandRepository;
    private commands: Command[];

    constructor() {
        this.commands = [];
        this.collect();
    }

    private collect(): void {
        const { invokablePath } = options;
        const files = readdirSync(join(__dirname, invokablePath), { withFileTypes: true });

        const commands = files
            .map(({ name }) => {
                if (name.endsWith(extension)) {
                    return new (Object.values(
                        require(join(__dirname, `${invokablePath}/${name}`))
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    )[0] as any)();
                }
            })
            .filter((command) => command);

        this.commands.push(...commands);
    }

    public static getInstance(): CommandRepository {
        if (!this.instance) this.instance = new CommandRepository();

        return this.instance;
    }

    public find(flag: string): Command {
        return this.commands.find(({ context }) => context.flags.includes(flag));
    }

    public all(): Command[] {
        return this.commands;
    }
}
