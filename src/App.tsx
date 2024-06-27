import "./App.css";

import Tooltip from "./components/atoms/tooltip/tooltip";

function App() {
  return (
    <Tooltip content="Tooltip on top" placement="top">
      <button>Hover me (Top)</button>
    </Tooltip>
  );
}

export default App;
