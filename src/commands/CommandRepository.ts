/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import { options } from './../config/config';
import { Command } from './Command';
import { readdirSync } from 'fs';

export class CommandRepository {
    private static instance: CommandRepository;
    private commands: Command[];

    constructor() {
        this.commands = [];
        this.collect();
    }

    private collect(): void {
        const { commandsPath } = options;
        const files = readdirSync(commandsPath);

        const commands = files.map((file) => {
            const filePath = path.join(commandsPath, file);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return new (Object.values(require(`../../${filePath}`))[0] as any)();
        });

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
