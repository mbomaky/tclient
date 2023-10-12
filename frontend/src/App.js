import {useState, useEffect} from "react";
import "./App.css";

const HOST = "http://localhost:4000";

function App() {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => await getWord())();
  }, []);

  const getWord = async () => {
    try {
      const res = await fetch(`${HOST}/getWord`, {
        headers: {"Content-Type": "application/json"},
      });
      const data = await res.json();

      if (res.status === 200 && data.success) {
        setWord(data.word);
        // setError("");
        // setText("");
        console.log('error ===>', error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!text) {
      setError("This field is required!");
      return;
    }

    try {
      const res = await fetch(`${HOST}/check`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text}),
      });
      const data = await res.json();

      if (res.status === 200 && data.success) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="menu">
          <a href="/">home</a>
          <a href="/words">words</a>
        </nav>
        <div className="title">English helper</div>
        <div></div>
      </header>
      <main className="main">
        <div className="main__wrap">
          <p className="word">{word}</p>
          <form noValidate onSubmit={onSubmitHandler}>
            <div className="field">
              <input
                className={`text ${isSuccess ? "success" : ""}`}
                type="text"
                value={text}
                onChange={(e) => {
                  !text && setError("");
                  setText(e.target.value);
                }}
              />
              {error === "" && <p className="error">{error}</p>}
            </div>
            <div className="btn-wrap">
              <button className="word-btn" onClick={getWord}>
                Word
              </button>
              <button className="check-btn" type="submit">
                Check
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
