import { version } from '../../../package.json';
import { Command } from '../Command.js';

export class VersionCommand extends Command {
    public execute(): void {
        console.log(`firecase: ${version}`);
    }
}
