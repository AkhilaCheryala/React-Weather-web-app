import Nav from "./components/Nav"
import TimeandLocation from "./components/TimeandLocation"
import Weather from "./components/Weather"


function App() {
  

  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-600 p-2">
      <div className="px-24 p-3">
      <Nav/>
      <TimeandLocation/>
      <Weather/>
      </div>
    </div>
  )
}

export default App
