/* eslint-disable prefer-rest-params */
import { FunctionalComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
import style from './style.css';

const Executor: FunctionalComponent = () => {
    const editor = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLDivElement>()
    const clearEditor = (): void => {
        editor.current.value = "";
    }
    const clearOutput = (): void => {
        output.current.innerHTML = "";
    }
    const runEditor = (): void => {
        clearOutput();
        (function (): void {
            function createLogNode(message: string): HTMLDivElement {
                const node = document.createElement("div");
                const textNode = document.createTextNode(message);
                node.appendChild(textNode);
                return node;
            }
            console.log = function (): void {
                const args = Array.prototype.slice.call(arguments);
                args.forEach((arg) => {
                    const node = createLogNode(arg);
                    output.current.appendChild(node);
                })
            }
            window.onerror = function (message, _, lineno, colno): void {
                console.log(`${message} on line ${lineno} and column ${colno}.`);
            };
        })();
        console.log(eval(editor.current.value));
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
                <button onClick={clearOutput}>Clear</button>
                <div ref={output} class={style.output}>{""}</div>
            </section>
        </main>
    );
};

export default Executor;
