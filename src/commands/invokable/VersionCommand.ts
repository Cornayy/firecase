import { version } from '../../../package.json';
import { Command } from '../Command';

export class VersionCommand extends Command {
    constructor() {
        super({
            flags: ['-V', '--version'],
            description: 'Prints the current version of firecase.',
        });
    }

    public execute(): void {
        console.log(`firecase: ${version}`);
    }
}
