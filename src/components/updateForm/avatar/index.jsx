import { Box, Button, InputLabel, Slider, Stack } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";

export default function Avatar({ formValues, setFormValues }) {
  const editor = useRef(null);
  const [options, setOptions] = useState({ scale: 1, rotate: 0 });

  const uploadHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormValues({ ...formValues, avatar: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Box>
      <AvatarEditor
        image={
          (formValues.avatar && formValues.avatar)||
          (localStorage.getItem("profileData") &&
            JSON.parse(localStorage.getItem("profileData")).avatar) 
        }
        width={200}
        height={200}
        color={[255, 255, 255, 0.6]}
        scale={options.scale}
        rotate={options.rotate}
        borderRadius={9999}
        ref={editor}
      />

      <InputLabel>Scale</InputLabel>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        min={1}
        max={10}
        step={0.1}
        color="secondary"
        value={options.scale}
        name="scale"
        onChange={(e) =>
          setOptions({ ...options, [e.target.name]: e.target.value })
        }
      />
      <InputLabel>Rotate</InputLabel>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        min={-360}
        max={360}
        step={1}
        color="secondary"
        value={options.rotate}
        name="rotate"
        onChange={(e) =>
          setOptions({ ...options, [e.target.name]: e.target.value })
        }
      />
      <Stack
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        rowGap={4}
        sx={{ marginY: "30px" }}
      >
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Upload avatar
          <input
            hidden
            name="avatar"
            id="avatar"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={uploadHandler}
          />
        </Button>
        
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
          onClick={() => {
            if (editor) {
              const canvasScaled = editor.current
                .getImageScaledToCanvas()
                .toDataURL();
              setFormValues({ ...formValues, avatar: canvasScaled });
              setOptions({ rotate: 0, scale: 1 });
            }
          }}
        >
          Apply changes
        </Button>
        
      </Stack>
    </Box>
  );
}
