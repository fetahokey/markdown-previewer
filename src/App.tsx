import { TextareaAutosize } from "@mui/core";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { marked } from "marked";
import { ChangeEvent, useEffect, useState } from "react";
import defaultContent from "./dummy";
import Prism from "prismjs";

const App = () => {
  const [content, setContent] = useState("");
  const [parsedContent, setParsedContent] = useState("");

  marked.setOptions({
    breaks: true,
    highlight: function (code: string) {
      console.log(code);
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    setParsedContent(marked.parse(event.target.value));
  };
  useEffect(() => {
    let effect = true;
    setContent(defaultContent);
    setParsedContent(marked.parse(defaultContent));
    return () => {
      // eslint-disable-next-line
      effect = false;
    };
  }, []);

  return (
    <Box
      className="App"
      height="100vh"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Box flex={6} height="80%" pr={2} pl={2}>
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
            value={content}
            onChange={handleChange}
            placeholder="Editor"
          />
        </Box>
      </Box>

      <Box
        flex={6}
        width={"50%"}
        height="80%"
        pr={10}
        pl={10}
        display="flex"
        flexDirection="column"
      >
        <Box border="1px solid black" flex={1}>
          <Typography variant="h6" component="div">
            Preview
          </Typography>
        </Box>

        <Box border={1} width={"100%"} height={"100%"} flex={11}>
          <Typography
            height={"100%"}
            id="preview"
            color="inherit"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
