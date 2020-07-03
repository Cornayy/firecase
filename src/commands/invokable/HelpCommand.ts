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
        const commands = repository
            .all()
            .sort((a, b) => a.context.flags.length - b.context.flags.length);

        Logger.info('USAGE');
        Logger.info('firecase [option...] [path]');
        Logger.info('OPTIONS');

        for (const { context } of commands) {
            const flags = context.flags.join(', ');
            Logger.info(`${flags} - ${context.description} `);
        }
    }
}
