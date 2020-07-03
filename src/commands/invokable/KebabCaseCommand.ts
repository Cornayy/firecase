import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class KebabCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['--kebabcase'],
            description:
                'Transforms all the filenames in the specified directory into kebab casing.',
        });
    }

    public execute(dir?: string): void {
        super.execute(dir);

        if (dir) this.fileManager.handle(dir, CaseOption.KebabCase);
    }
}
