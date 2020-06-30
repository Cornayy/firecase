import { Command } from '../Command';

export class HelpCommand extends Command {
    constructor() {
        super({
            flags: ['H', '--help'],
            description: 'Lists all the possible arguments you can pass to firecase.',
        });
    }

    execute(): void {
        console.log('options');
    }
}
