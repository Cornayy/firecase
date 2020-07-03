import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class CamelCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['--camelcase'],
            description:
                'Transforms all the filenames in the specified directory into camel casing.',
        });
    }

    public execute(dir?: string): void {
        super.execute(dir);

        if (dir) this.fileManager.handle(dir, CaseOption.CamelCase);
    }
}
