import { CaseStrategy } from '../../types';
import { camelCase } from 'lodash';

export class CamelCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return camelCase(file);
    }
}
