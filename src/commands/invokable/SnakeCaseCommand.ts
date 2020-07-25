import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class SnakeCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['-S', '--snakecase'],
            description:
                'Transforms all the filenames in the specified directory into snake casing.',
            casing: CaseOption.SnakeCase,
        });
    }
}
