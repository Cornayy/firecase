import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class KebabCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['-K', '--kebabcase'],
            description:
                'Transforms all the filenames in the specified directory into kebab casing.',
            casing: CaseOption.KebabCase,
        });
    }
}
