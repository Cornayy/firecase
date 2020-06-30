const { argv } = process;

if (process.env.NODE_ENV !== 'test') {
    console.log(argv.slice(2));
}
