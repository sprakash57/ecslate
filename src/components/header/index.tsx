import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Execute
                </Link>
                <Link activeClassName={style.active} href="/compare">
                    Compare
                </Link>
                <Link activeClassName={style.active} href="/beautify">
                    Beautify
                </Link>
                <Link activeClassName={style.active} href="/convert">
                    Convert
                </Link>
            </nav>
        </header>
    );
};

export default Header;
