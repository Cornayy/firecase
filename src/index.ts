import { Firecase } from './core/Firecase';

if (process.env.NODE_ENV !== 'test') {
    const firecase = new Firecase();
    firecase.run(process.argv.slice(2));
}
