import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class PascalCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['--pascalcase'],
            description:
                'Transforms all the filenames in the specified directory into pascal casing.',
        });
    }

    public execute(dir?: string): void {
        if (!dir) return;

        this.fileManager.handle(dir, CaseOption.PascalCase);
    }
}
