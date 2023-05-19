import About from './about';
import '../App.css';

export default function Homepage () {
    return (
        <div className="homepage">
            <div className="welcome">
                Welcome to Evergreen!
                <About />

            </div>
        </div>
    );
}