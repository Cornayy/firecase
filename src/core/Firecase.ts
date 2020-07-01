import { PathResolver } from './../util/PathResolver';
import { ArgumentParser } from './ArgumentParser';

export class Firecase {
    private filePath?: string;
    private args: string[];
    private parser: ArgumentParser;

    constructor(args: string[]) {
        this.args = args;
        this.filePath = PathResolver.resolve(args);
        this.parser = new ArgumentParser();
    }

    public run(): void {
        const commands = this.parser.parse(this.args);

        for (const command of commands) {
            command.execute(this.filePath);
        }
    }
}
