import './styles/App.css';
import Chat from "./views/chat/Chat";
import Navigation from "./views/navigation/Navigation";
import Toolbar from "./views/toolbar/Toolbar";

function App() {
    return (
        <div className="App">
            <div className="container mx-auto">
                <div className="columns-3">
                    <Navigation/>
                    <Chat />
                    <Toolbar />
                </div>
            </div>
        </div>
    );
}

export default App;
