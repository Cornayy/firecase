import { CaseStrategy } from '../../types';

export class SnakeCaseStrategy implements CaseStrategy {
    transform(file: string): string {
        return file;
    }
}
