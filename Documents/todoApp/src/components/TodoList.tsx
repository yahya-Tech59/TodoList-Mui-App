import { Box, Button, Grid, Input, Paper, Typography } from "@mui/material";
import { useState } from "react";

interface TodoListTasks {
  tasks: [];
  newTasks: string;
}

const TodoList: React.FC<TodoListTasks> = () => {
  const [tasks, setTasks] = useState([
    "Eat Food",
    "Make Exercise",
    "Walk miles",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function MoveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function MoveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: 10 }}>
      <Typography variant="h3">Todo List</Typography>

      <Box>
        <Input
          type="text"
          placeholder="Enter a task..."
          onChange={handleInputChange}
          sx={{ boxShadow: 2, bgcolor: "white", mt: 3 }}
        />
        <Button
          variant="contained"
          size="small"
          sx={{ ml: 2 }}
          onClick={AddTask}
        >
          Add
        </Button>
      </Box>
      <ol>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              listStyle: "None",
              display: "flex",
            }}
          >
            <Paper
              sx={{
                width: 300,
                height: 30,
                display: "flex",
                ml: 100,
                my: 1,
                pt: 2,
                pl: 2,
              }}
            >
              {task}
            </Paper>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mt: 1.5,
                  position: "absolute",
                  bgcolor: "secondary.main",
                  ":hover": { bgcolor: "secondary.dark" },
                }}
                onClick={() => DeleteTask(index)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: 12,
                  mt: 1.5,
                  position: "absolute",
                  bgcolor: "secondary.main",
                  ":hover": { bgcolor: "secondary.dark" },
                }}
                onClick={() => MoveTaskUp(index)}
              >
                Up
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: 21,
                  mt: 1.5,
                  position: "absolute",
                  bgcolor: "secondary.main",
                  ":hover": { bgcolor: "info.dark" },
                }}
                onClick={() => MoveTaskDown(index)}
              >
                Down
              </Button>
            </Box>
          </li>
        ))}
      </ol>
    </Box>
  );
};

export default TodoList;
