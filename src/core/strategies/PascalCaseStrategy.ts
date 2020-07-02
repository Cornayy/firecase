import { CaseStrategy } from '../../types';

export class PascalCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return file;
    }
}
