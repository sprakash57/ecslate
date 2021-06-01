import { h, FunctionalComponent, JSX } from 'preact';
import { useRef } from 'preact/hooks';
import YAML from 'yaml';
import style from './style.css';

const Beautifier: FunctionalComponent = () => {
    const editor = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLDivElement>();
    const inputType = useRef<HTMLSelectElement>();

    const clearEditor = (): void => {
        editor.current.value = '';
    }

    const getStrAsFormat = (): string => {
        switch (inputType.current.value) {
            case 'yaml': {
                const inputAsYaml = YAML.parse(editor.current.value);
                return YAML.stringify(inputAsYaml);
            }
            default: {
                const inputAsJson = JSON.parse(editor.current.value);
                return JSON.stringify(inputAsJson, undefined, 2);
            }
        }
    }

    const runBeautifier = (): void => {
        try {
            output.current.innerHTML = "";
            const preEl = document.createElement('pre');
            preEl.innerHTML = getStrAsFormat();
            output.current.appendChild(preEl);
        } catch (error) {
            output.current.innerHTML = error.message;
        }
    }

    const selectInputType = (e: JSX.TargetedEvent<HTMLSelectElement>): void => {
        inputType.current.value = e.currentTarget.value;
    }

    return (
        <main class={style.container}>
            <section class={style.section}>
                <h2>Editor</h2>
                <button onClick={runBeautifier}>Run</button>
                <button onClick={clearEditor}>Clear</button>
                <select ref={inputType} name="inputType" id="inputType" onChange={selectInputType}>
                    <option selected value="json">JSON</option>
                    <option value="yaml">YAML</option>
                </select>
                <textarea ref={editor} name="editor" id="editor" cols={60} rows={38} />
            </section>
            <section class={style.section}>
                <h2>Output</h2>
                <div ref={output} class={style.output}>{""}</div>
            </section>
        </main>
    )
}

export default Beautifier;
