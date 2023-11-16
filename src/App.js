import './css/App.css';
import MessageView from './components/messageView'
function App() {
  

  return (
    <div className="App">
      <div className="grid grid-cols-8 min-h-screen">
          <div className="col-span-1 bg-gray-500"> 
            <h1>Menu</h1>
          </div>
          <div className="col-span-5 bg-slate-900"> 
            <MessageView />
          </div>
          <div className="col-span-2 bg-gray-700"> 
            <h1>Menu</h1>
          </div>
        </div>
    </div>
  );
}

export default App;
