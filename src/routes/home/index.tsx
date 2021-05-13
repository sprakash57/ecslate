import { FunctionalComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
import style from './style.css';

const Home: FunctionalComponent = () => {
    const editor = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLTextAreaElement>()
    const clearEditor = (): void => {
        editor.current.value = "";
    }
    const runEditor = () => {
        output.current.value = eval(editor.current.value);
    }
    return (
        <main class={style.container}>
            <section class={style.section}>
                <h2>Editor</h2>
                <button onClick={runEditor}>Run</button>
                <button onClick={clearEditor}>Clear</button>
                <textarea ref={editor} name="editor" id="editor" cols={60} rows={38} />
            </section>
            <section class={style.section}>
                <h2>Output</h2>
                <textarea ref={output} name="output" cols={60} rows={16} readonly />
                <h2>Console</h2>
                <textarea name="console" cols={60} rows={17} readonly />
            </section>
        </main>
    );
};

export default Home;
