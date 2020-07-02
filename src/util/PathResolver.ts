import os from 'os';
import fs from 'fs';

export class PathResolver {
    public static resolve(args: string[]): string {
        const [path] = args
            .map((arg) => {
                const path = arg.replace(/~\/|~(?!.)/, `${os.homedir()}/`);
                if (fs.existsSync(path)) return path;
            })
            .filter((path) => path);

        return path; 
    }
}
