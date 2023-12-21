import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <TodoList />
    </Box>
  );
}

export default App;
