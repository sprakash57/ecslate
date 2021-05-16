import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Executor from '../routes/Executor';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './header';

const App: FunctionalComponent = () => {
    return (
        <main id="app">
            <Header />
            <Router>
                <Route path="/" component={Executor} />
                <Route path="/profile/" component={Profile} user="me" />
                <Route path="/profile/:user" component={Profile} />
                <NotFoundPage default />
            </Router>
        </main>
    );
};

export default App;
