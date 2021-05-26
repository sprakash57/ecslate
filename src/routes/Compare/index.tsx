import { FunctionalComponent, h, JSX } from 'preact';
import { useRef } from 'preact/hooks';
import style from './style.css';
import DiffWrapper from './DiffWrapper';

const Compare: FunctionalComponent = () => {
    const editor1 = useRef<HTMLTextAreaElement>();
    const editor2 = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLPreElement>();
    const inputType = useRef<HTMLSelectElement>();

    const resetFields = (): void => {
        editor1.current.value = "";
        editor2.current.value = "";
        output.current.innerHTML = "";
    }

    const runCompare = (): void => {
        output.current.innerHTML = "";
        let span: HTMLSpanElement, diff: Diff.Change[];
        const fragment = document.createDocumentFragment();
        if (inputType.current.value === 'object') {
            diff = DiffWrapper.diffLines(editor1.current.value, editor2.current.value);
        } else {
            diff = DiffWrapper.diffChars(editor1.current.value, editor2.current.value);
        }
        diff.forEach((part: Record<string, any>) => {
            const color = part.added ? 'green' : part.removed ? 'red' : 'white';
            span = document.createElement('span');
            span.style.background = color;
            span.appendChild(document.createTextNode(part.value));
            fragment.appendChild(span);
        });
        output.current.appendChild(fragment);
    }

    const selectInputType = (e: JSX.TargetedEvent<HTMLSelectElement>): void => {
        inputType.current.value = e.currentTarget.value;
    }

    return (
        <main class={style.container}>
            <section class={style.rows}>
                <div class={style.column}>
                    <h2>Editor 1</h2>
                    <button onClick={runCompare}>Compare</button>
                    <button onClick={resetFields}>Reset</button>
                    <select ref={inputType} name="inputType" id="inputType" onChange={selectInputType}>
                        <option selected value="text">Text</option>
                        <option value="object">Object</option>
                    </select>
                    <textarea ref={editor1} name="editor" id="editor" cols={60} rows={38} />
                </div>
                <div class={style.column}>
                    <h2>Editor 2</h2>
                    <textarea ref={editor2} name="output" id="output" cols={60} rows={38} />
                </div>
            </section>
            <section class={style.rows}>
                <div class={style.column}>
                    <h2>Output</h2>
                    <pre ref={output}>{""}</pre>
                </div>
            </section>
        </main>
    );
};

export default Compare;
