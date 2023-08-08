import './Loader.css';
import './animate';

function Loader() {
    return (
        <div className="loader">
            <canvas id="canvas" height="175" width="350" class="m-auto"></canvas>
            <p class="text">0 %</p>
        </div>
    );
}

export default Loader;
