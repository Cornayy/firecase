import { CaseStrategy } from '../../types';
import { snakeCase } from 'lodash';

export class SnakeCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return snakeCase(file);
    }
}
