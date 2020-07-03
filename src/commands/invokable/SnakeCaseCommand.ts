import { CaseCommand } from '../CaseCommand';
import { CaseOption } from '../../types';

export class SnakeCaseCommand extends CaseCommand {
    constructor() {
        super({
            flags: ['--snakecase'],
            description:
                'Transforms all the filenames in the specified directory into snake casing.',
        });
    }

    public execute(dir?: string): void {
        super.execute(dir);

        if (dir) this.fileManager.handle(dir, CaseOption.SnakeCase);
    }
}
