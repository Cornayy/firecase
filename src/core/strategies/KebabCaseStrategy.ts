import { CaseStrategy } from '../../types';

export class KebabCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return file;
    }
}
