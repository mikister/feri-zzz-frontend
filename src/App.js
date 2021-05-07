import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import NotFoundPage from './pages/404';
import AboutPage from './pages/about';
import CollabPage from './pages/collab';
import HomePage from './pages/home';
import TimelinePage from './pages/timeline';

function App() {
    return (
        <div className="zzz">
            <Router>
                <Header />
                <main className="zzz__contents">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/timeline" component={TimelinePage} />
                        <Route path="/collab" component={CollabPage} />
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
