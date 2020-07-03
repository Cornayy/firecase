import { upperFirst, camelCase } from 'lodash';
import { CaseStrategy } from '../../types';

export class PascalCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return upperFirst(camelCase(file));
    }
}
