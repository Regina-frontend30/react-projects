import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

import { useAppDispatch, useAppSelector } from "./app/hooks"
import { toggleTheme, selectTheme } from "./features/theme/themeSlice"

export const App = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme,
        minHeight: "100vh",
        color: theme === "black" ? "white" : "black",
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>

        <Counter />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Quotes />

        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header>
    </div>
  )
}
