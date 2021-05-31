import { FunctionalComponent, h, JSX } from 'preact';
import { useRef } from 'preact/hooks';
import sass from 'node-sass';
import style from './style.css';

const Convert: FunctionalComponent = () => {
    const editor = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLDivElement>();
    const inputType = useRef<HTMLSelectElement>();

    const clearEditor = (): void => {
        editor.current.innerHTML = "";
    }

    const runConverter = (): void => {
        output.current.innerHTML = "";
        const result = sass.renderSync({
            data: editor.current.value
        })
        output.current.innerHTML = String(result);
    }

    const selectInputType = (e: JSX.TargetedEvent<HTMLSelectElement>): void => {
        inputType.current.value = e.currentTarget.value;
    }

    return (
        <main class={style.container}>
            <section class={style.section}>
                <h2>Editor</h2>
                <button onClick={runConverter}>Run</button>
                <button onClick={clearEditor}>Clear</button>
                <select ref={inputType} name="inputType" id="inputType" onChange={selectInputType}>
                    <option selected value="scss">Scss</option>
                    <option value="css">Css</option>
                </select>
                <textarea ref={editor} name="editor" id="editor" cols={60} rows={38} />
            </section>
            <section class={style.section}>
                <h2>Output</h2>
                <div ref={output} class={style.output}>{""}</div>
            </section>
        </main>
    );
};

export default Convert;
