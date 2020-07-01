import { Logger } from './../../util/Logger';
import { CommandRepository } from './../CommandRepository';
import { Command } from '../Command';

export class HelpCommand extends Command {
    constructor() {
        super({
            flags: ['-H', '--help'],
            description: 'Lists all the possible arguments you can pass to firecase.',
        });
    }

    public execute(): void {
        const repository = CommandRepository.getInstance();
        const commands = repository.all();

        for (const { context } of commands) {
            const flags = context.flags.join(', ');
            Logger.info(`${flags} - ${context.description} `);
        }
    }
}
