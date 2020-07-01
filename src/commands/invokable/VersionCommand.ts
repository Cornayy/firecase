import { version } from '../../../package.json';
import { Command } from '../Command';
import { Logger } from './../../util/Logger';

export class VersionCommand extends Command {
    constructor() {
        super({
            flags: ['-V', '--version'],
            description: 'Prints the current version of firecase.',
        });
    }

    public execute(): void {
        Logger.info(`firecase: ${version}`);
    }
}
