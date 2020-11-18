import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class CamelCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['-C', '--camelcase'],
            description:
                'Transforms all the filenames in the specified directory into camel casing.',
            casing: CaseOption.CamelCase,
        });
    }
}
