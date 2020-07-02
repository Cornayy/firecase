import { CaseStrategyFactory } from './factory/CaseStrategyFactory';
import { CaseOption } from './../types';
import { Logger } from './../util/Logger';
import { readdirSync } from 'fs';

export class FileManager {
    private static instance: FileManager;
    private strategyFactory: CaseStrategyFactory;

    constructor() {
        this.strategyFactory = CaseStrategyFactory.getInstance();
    }

    public static getInstance(): FileManager {
        if (!this.instance) this.instance = new FileManager();

        return this.instance;
    }

    public handle(dir: string, option: CaseOption): void {
        try {
            const strategy = this.strategyFactory.get(option);
            const files = readdirSync(dir, { withFileTypes: true })
                .filter((dirent) => dirent.isFile())
                .map((dirent) => dirent.name);
            const transformedFiles = files.map((file) => strategy.transform(file));

            Logger.info(`Transformed ${transformedFiles.length} files into ${option.toString()}.`);
        } catch (err) {
            Logger.error(`Could not rename the files in the specified directory. ${err.message}`);
        }
    }
}
