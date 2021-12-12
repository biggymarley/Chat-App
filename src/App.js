import { Container } from "@mui/material";
import Chat from "./ChatApp/chat";

function App() {
  return (
    <Container maxWidth="lg" sx={root}>
      <Chat />
    </Container>
  );
}
const root = {
  minHeight:"100vh",
  display:"flex",
  alignItems:"center"
}

export default App;
