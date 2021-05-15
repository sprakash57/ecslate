import { FunctionalComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
import style from './style.css';

const Home: FunctionalComponent = () => {
    const editor = useRef<HTMLTextAreaElement>();
    const output = useRef<HTMLDivElement>()
    const clearEditor = (): void => {
        editor.current.value = "";
    }
    const runEditor = (): void => {
        (function (): void {
            function createLogNode(message: string): HTMLDivElement {
                const node = document.createElement("div");
                const textNode = document.createTextNode(message);
                node.appendChild(textNode);
                return node;
            }
            const baseLogFunction = console.log;
            console.log = function () {
                baseLogFunction.apply(console, arguments);
                const args = Array.prototype.slice.call(arguments);
                for (let i = 0; i < args.length; i++) {
                    const node = createLogNode(args[i]);
                    output.current.appendChild(node);
                }

            }

            window.onerror = function (message, url, linenumber) {
                console.log("JavaScript error: " + message + " on line " +
                    linenumber + " for " + url);
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
                <div ref={output}>Output</div>
                <h2>Console</h2>
                <textarea name="console" cols={60} rows={17} readonly />
            </section>
        </main>
    );
};

export default Home;
