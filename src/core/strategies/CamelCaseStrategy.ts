import { CaseStrategy } from '../../types';

export class CamelCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return file;
    }
}
