
import { CommandRepository } from '../commands/CommandRepository';
import { Logger } from '../util/Logger';
import { Command } from '../commands/Command';

export class ArgumentParser {
    private repository: CommandRepository;

    constructor() {
        this.repository = CommandRepository.getInstance();
    }

    public parse(args: string[]): Command[] {
        const commands = args.map((arg) => this.repository.find(arg)).filter((command) => command);

        if (commands.length === 0)
            Logger.info('No commands found, enter --help for all available commands.');

        return commands;
    }
}
