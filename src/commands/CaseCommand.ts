import { Logger } from './../util/Logger';
import { CommandContext } from '../types/index';
import { Command } from './Command';
import { FileManager } from '../core/FileManager';

export abstract class CaseCommand extends Command {
    protected fileManager: FileManager;

    constructor(context: CommandContext) {
        super(context);
        this.fileManager = FileManager.getInstance();
    }

    public execute(dir?: string): void {
        if (!dir) {
            Logger.error('No directory specified, use --help for more details about the usage.');
            return;
        }
    }
}
