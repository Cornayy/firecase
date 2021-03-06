import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class PascalCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['-P', '--pascalcase'],
            description:
                'Transforms all the filenames in the specified directory into pascal casing.',
            casing: CaseOption.PascalCase,
        });
    }
}
