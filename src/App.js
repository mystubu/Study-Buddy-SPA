import './css/App.css';
import ChatView from "./views/ChatView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Study Buddy</h1>
          <ChatView />
      </header>
    </div>
  );
}

export default App;
