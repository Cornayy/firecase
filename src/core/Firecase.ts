import { PathResolver } from './../util/PathResolver';
import { ArgumentParser } from './ArgumentParser';

export class Firecase {
    private filePath?: string;
    private parser: ArgumentParser;

    constructor() {
        this.parser = new ArgumentParser();
    }

    public run(args: string[]): void {
        this.filePath = PathResolver.resolve(args);
        const commands = this.parser.parse(args);

        for (const command of commands) {
            command.execute(this.filePath);
        }
    }
}
