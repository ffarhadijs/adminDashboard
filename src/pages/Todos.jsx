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
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { tokens } from "../theme";
import DoneIcon from "@mui/icons-material/Done";
import { useSendTodo } from "../hooks/useSendTodo";
import { useFetchTodos } from "../hooks/useFetchTodos";
import { useUpdateTodo } from "../hooks/useUpdateTodo";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useDeleteTodos } from "../hooks/useDeleteTodos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useFetchTodo } from "../hooks/useFetchTodo";


const Todos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const [itemId, setItemId] = useState("");
  const [editable, setEditable] = useState(false);
  const { data, status } = useFetchTodos();
  const [todos, setTodos] = useState(data);
  const { mutateAsync, isLoading } = useSendTodo();
  const { mutateAsync: mutateUpdateTodo } = useUpdateTodo();
  const { mutateAsync: mutateDeleteTodos } = useDeleteTodos();
  const { mutateAsync: mutateDeleteTodo } = useDeleteTodo();
  const { data: getEditTodo } = useFetchTodo(itemId);

  const open = Boolean(anchorEl);

  const handleClick = (e, id) => {
    setAnchorEl(e.currentTarget);
    setItemId(id);
  };


  const [todo, setTodo] = useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    isCompleted: false,
  });

  const completedTodos = data?.filter((todo) => todo.isCompleted === true);
  const changeHandler = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const submitHandler = () => {
    editable && mutateUpdateTodo(todo);
    !editable && mutateAsync(todo);
    setTodo({
      id: Math.floor(Math.random() * 10000),
      title: "",
      isCompleted: false,
    });
    setEditable(false);
  };
  const checkedHandler = (item) => {
    mutateUpdateTodo({ ...item, isCompleted: !item.isCompleted });
  };

  const clearCompletedHandler = () => {
    const completedTodosId = completedTodos.map((todo) => todo.id);
    mutateDeleteTodos(completedTodosId);
  };

  const removeHandler = () => {
    mutateDeleteTodo(itemId);
    setAnchorEl(null);
  };

  const editHandler = () => {
    setEditable(true);
    setTodo(getEditTodo.data);
    setAnchorEl(null);
  };

  const showAllTodos = () => {
    setTodos(data);
  };

  const showActiveHandler = () => {
    data?.filter((item) => item.isCompleted === false);
  };
  const showCompletedHandler = () => {
    const completedTodos = data?.filter((item) => item.isCompleted === true);
    setTodos(completedTodos);
  };
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
  // console.log(todos);
  return (
    <Box sx={{ padding: "40px" }}>
      <Stack flexDirection={"row"} columnGap={2} sx={{ marginBottom: "20px" }}>
        <Button onClick={showAllTodos} variant="contained" color="secondary">
          All
        </Button>
        <Button
          onClick={showActiveHandler}
          variant="contained"
          color="secondary"
        >
          Active
        </Button>
        <Button
          onClick={showCompletedHandler}
          variant="contained"
          color="secondary"
        >
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
        data?.map((item) => (
          <Paper
            key={item.id}
            sx={{
              marginY: "10px",
              padding: "10px",
              backgroundColor: colors.primary[600],
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            elevation={3}
          >
            <Box>
              <Checkbox
                checked={item.isCompleted}
                onChange={() => checkedHandler(item)}
              />
              <Typography variant="body1" sx={{ display: "inline-block" }}>
                {item.title}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={(e) => handleClick(e, item.id)}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={editHandler}>Edit</MenuItem>
                <MenuItem onClick={removeHandler}>Remove</MenuItem>
              </Menu>
            </Box>
          </Paper>
        ))}
      {status === "loading" && <CircularProgress />}

      {!!completedTodos?.length && (
        <Button variant="contained" onClick={clearCompletedHandler}>
          clear completed
        </Button>
      )}
    </Box>
  );
};
export default Todos;
