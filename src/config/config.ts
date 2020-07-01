export const options = {
    commandsPath: 'src/commands/invokable',
    invokablesPath: '/invokable',
};

export const extension = process.env.NODE_ENV === 'dev' ? 'ts' : 'js';
