import './css/App.css';
import MessageView from './components/messages/messageView'
function App() {
  

  return (
    <div className="App">
      <div className="grid grid-cols-8 min-h-screen">
          <div className="col-span-1 bg-gray-500"> 
            <h1>Menu</h1>
          </div>
          <div className="col-span-5 bg-slate-900"> 
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <MessageView />
              </div>
              <div className="bg-white p-2">
                <input className="w-full" placeholder="Type a message..."></input>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-gray-700"> 
            <h1>Menu</h1>
          </div>
        </div>
    </div>
  );
}

export default App;
