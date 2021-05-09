import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <main class={style.container}>
            <section class={style.section}>
                <h2>Editor</h2>
                <textarea name="editor" id="editor" cols={60} rows={38} />
            </section>
            <section class={style.section}>
                <h2>Output</h2>
                <textarea name="output" cols={60} rows={16} readonly />
                <h2>Console</h2>
                <textarea name="console" cols={60} rows={17} readonly />
            </section>
        </main>
    );
};

export default Home;
