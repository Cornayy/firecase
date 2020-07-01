import { Command } from '../Command';

export class CamelCaseCommand extends Command {
    constructor() {
        super({
            flags: ['--camelcase'],
            description:
                'Transforms all the filenames in the specified directory into camelcasing.',
        });
    }

    public execute(dir?: string): void {
        if (!dir) return;
    }
}
