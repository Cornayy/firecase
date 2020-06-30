import { HelpCommand } from './commands/invokable/HelpCommand';

if (process.env.NODE_ENV !== 'test') {
    const command = new HelpCommand();
    command.execute();
}
