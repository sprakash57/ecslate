import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Executor from '../routes/Executor';
import Header from './header';
import Compare from '../routes/Compare';
import Beautifier from '../routes/Beautifier';

const App: FunctionalComponent = () => {
    return (
        <main id="app">
            <Header />
            <Router>
                <Route path="/" component={Executor} />
                <Route path="/compare" component={Compare} />
                <Route path="/beautify" component={Beautifier} />
            </Router>
        </main>
    );
};

export default App;
