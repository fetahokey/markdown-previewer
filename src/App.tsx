import { TextareaAutosize } from "@mui/core";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import "./App.css";

function App() {
  return (
    <Box
      className="App"
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Box width="100%" height="80%" pr={2} pl={2}>
        <Box>
          <Box border="1px solid black">
            <Typography variant="h6" component="div">
              Editor
            </Typography>
          </Box>
          <TextareaAutosize
            className="Editor"
            id="editor"
            aria-label="Editor"
            minRows={34}
            maxRows={35}
            placeholder="Editor"
          />
        </Box>
      </Box>
      <Box width="100%" height="80%" id="preview" pr={10} pl={10}>
        <Box border="1px solid black">
          <Typography variant="h6" component="div">
            Preview
          </Typography>
        </Box>

        <Box>
          <Typography>Preview ....</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
