import { Firecase } from './core/Firecase';

if (process.env.NODE_ENV !== 'test') {
    const firecase = new Firecase(process.argv.slice(2));
    firecase.run();
}
