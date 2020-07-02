import { CommandContext } from '../types/index';
import { Command } from './Command';
import { FileManager } from '../core/FileManager';

export abstract class CaseCommand extends Command {
    protected fileManager: FileManager;

    constructor(context: CommandContext) {
        super(context);
        this.fileManager = FileManager.getInstance();
    }

    public abstract execute(dir?: string): void;
}
