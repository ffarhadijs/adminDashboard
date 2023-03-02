import {
  Box,
  TextField,
  useTheme,
  styled,
  Button,
  Stack,
  InputAdornment,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { tokens } from "../theme";
import DoneIcon from "@mui/icons-material/Done";
import { useSendTodo } from "../hooks/useSendTodo";
import { useFetchTodos } from "../hooks/useFetchTodos";
import { useUpdateTodo } from "../hooks/useUpdateTodo";
import { useDeleteTodo } from "../hooks/useDeleteTodo";

const Todos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { mutateAsync, isLoading } = useSendTodo();
  const { data, status } = useFetchTodos();
  const { mutateAsync: mutateUpdateTodo } = useUpdateTodo();
  const {mutateAsync: mutateDeleteTodo}=useDeleteTodo()
  const [todo, setTodo] = useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    isCompleted: false,
  });
  const completedTodos=data?.data?.filter(todo=>todo.isCompleted===true)
  const changeHandler = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const submitHandler = () => {
    mutateAsync(todo);
    setTodo({
      id: Math.floor(Math.random() * 10000),
      title: "",
      isCompleted: false,
    });
  };
  const checkedHandler = (item) => {
    mutateUpdateTodo({ ...item, isCompleted: !item.isCompleted });
  };

  const clearCompletedHandler=()=>{
    const completedTodosId=completedTodos.map(todo=>todo.id)
    mutateDeleteTodo(completedTodosId)
  }
  const Input = styled(TextField)({
    "& .MuiInputBase-input": {
      color: colors.grey[100],
      padding: "15px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #CCCCCC",
      },
      "&:hover fieldset": {
        border: "1px solid #CCCCCC",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #CCCCCC",
      },
    },
  });

  return (
    <Box sx={{ padding: "40px" }}>
      <Stack flexDirection={"row"} columnGap={2} sx={{ marginBottom: "20px" }}>
        <Button variant="contained" color="secondary">
          All
        </Button>
        <Button variant="contained" color="secondary">
          Active
        </Button>
        <Button variant="contained" color="secondary">
          Completed
        </Button>
      </Stack>
      <Input
        value={todo.title}
        onChange={changeHandler}
        placeholder={"What needs to be done?"}
        autoFocus
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={submitHandler} disabled={isLoading}>
                <DoneIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {status === "success" &&
        data?.data.map((item) => (
          <Paper
            key={item.id}
            sx={{
              marginY: "10px",
              padding: "10px",
              backgroundColor: colors.primary[600],
            }}
            elevation={3}
          >
            <Checkbox
              checked={item.isCompleted}
              onChange={() => checkedHandler(item)}
            />
            <Typography variant="body1" sx={{ display: "inline-block" }}>
              {item.title}
            </Typography>
          </Paper>
        ))}
      {status === "loading" && <CircularProgress />}
      {!!completedTodos.length&&
      <Button variant="contained" onClick={clearCompletedHandler}>clear completed</Button>
      }
    </Box>
  );
};
export default Todos;
