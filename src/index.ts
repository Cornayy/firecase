import { CommandRepository } from './commands/CommandRepository';

if (process.env.NODE_ENV !== 'test') {
    new CommandRepository();
}
