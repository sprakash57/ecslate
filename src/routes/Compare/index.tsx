import { FunctionalComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
import style from './style.css';

const Compare: FunctionalComponent = () => {
    const editor1 = useRef<HTMLTextAreaElement>();
    const editor2 = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLPreElement>();

    const runCompare = (): void => {
        output.current.innerHTML = "";
        const diff = require('diff').diffChars(editor1.current.value, editor2.current.value);
        let span: HTMLSpanElement;
        const fragment = document.createDocumentFragment();
        diff.forEach((part: Record<string, any>) => {
            const color = part.added ? 'green' : part.removed ? 'red' : 'white';
            span = document.createElement('span');
            span.style.background = color;
            span.appendChild(document.createTextNode(part.value));
            console.log(part.value)
            fragment.appendChild(span);
        });
        output.current.appendChild(fragment);
    }

    return (
        <main class={style.container}>
            <section class={style.rows}>
                <div class={style.column}>
                    <h2>Editor 1</h2>
                    <button onClick={runCompare}>Compare</button>
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
