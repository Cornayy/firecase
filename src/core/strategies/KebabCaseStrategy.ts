import { CaseStrategy } from '../../types';
import { kebabCase } from 'lodash';

export class KebabCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return kebabCase(file);
    }
}
