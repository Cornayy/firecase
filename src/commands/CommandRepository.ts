import path from 'path';
import { options } from './../config/config';
import { Command } from './Command';
import { promises } from 'fs';

export class CommandRepository {
    private commands: Command[];

    constructor() {
        this.commands = [];
        this.collect();
    }

    private async collect(): Promise<void> {
        const { commandsPath } = options;
        const files = await promises.readdir(commandsPath);

        await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(commandsPath, file);
                const command = await import(`../../${filePath}`);

                this.commands.push(command);
            })
        );
    }

    find(flag: string): Command {
        return this.commands.find(({ context }) => context.flags.includes(flag));
    }

    all(): Command[] {
        return this.commands;
    }
}
