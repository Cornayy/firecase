import { RenameOptions } from './../types/index';
import { CaseStrategyFactory } from './factory/CaseStrategyFactory';
import { CaseOption } from './../types';
import { Logger } from './../util/Logger';
import { readdirSync, renameSync } from 'fs';
import { join, parse } from 'path';

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
                .map((file) => {
                    const { name, ext } = parse(file.name);
                    const transform = strategy.transform(name);
                    this.rename({ dir, file: name.concat(ext), transform: transform.concat(ext) });

                    return transform;
                });

            Logger.info(`Transformed ${files.length} files into ${option.toString()}.`);
        } catch (err) {
            Logger.error(`Could not rename the files in the specified directory. ${err.message}`);
        }
    }

    private rename({ dir, file, transform }: RenameOptions): void {
        renameSync(join(dir, file), join(dir, transform));
    }
}
