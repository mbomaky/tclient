import { useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState("")

  return (
    <div className="app">
      <header className="header">
        <nav className="menu">
          <a href="/home">home</a>
          <a href="/home">words</a>
        </nav>
        <div className="title">English helper</div>
        <div></div>
      </header>
      <main className="main">
        <div className="main__wrap">
          <input
            className="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </main>
    </div>
  )
}

export default App
