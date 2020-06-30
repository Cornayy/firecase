import { version } from '../../../package.json';
import { Command } from '../Command';

export class VersionCommand extends Command {
    public execute(): void {
        console.log(`firecase: ${version}`);
    }
}
