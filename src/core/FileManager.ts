import { CaseOption } from './../types';
import { readdirSync } from 'fs';

export class FileManager {
    private static instance: FileManager;

    public static getInstance(): FileManager {
        if (!this.instance) this.instance = new FileManager();

        return this.instance;
    }

    public rename(dir: string, option: CaseOption): void {
        const files = readdirSync(dir);
        console.log(files, option.toString());
    }
}
