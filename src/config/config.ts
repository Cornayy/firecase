export const options = {
    commandsPath: 'src/commands/invokable',
    invokablePath: '/invokable',
};

export const extension = process.env.NODE_ENV === 'dev' ? 'ts' : 'js';
