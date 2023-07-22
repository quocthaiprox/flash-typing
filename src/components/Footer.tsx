import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Footer.scss";


export default function Footer() {
    const { timerId } = useSelector((state: State) => state.time);
    return (
        <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
            <span className="hint">
                <kbd>Ctrl</kbd> + <kbd>k</kbd> to open command pallet
            </span>
            <span className="hint">
                <kbd>Tab</kbd> to restart test
            </span>
            <footer>
                <span>
                    created by{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="">
                        @ngoquocthaidev
                    </a>
                </span>
            </footer>
        </div>
    );
}
