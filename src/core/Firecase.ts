import { Logger } from '../util/Logger.js';
import { CommandRepository } from './../commands/CommandRepository';

export class Firecase {
    private repository: CommandRepository;

    constructor() {
        this.repository = CommandRepository.getInstance();
    }

    public run(args: string[]): void {
        const commands = args.map((arg) => this.repository.find(arg)).filter((command) => command);

        if (commands.length === 0) {
            Logger.info('No commands found, enter --help for all available commands.');
            return;
        }

        for (const command of commands) {
            command.execute();
        }
    }
}
