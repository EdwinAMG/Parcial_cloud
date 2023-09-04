import Tareas from "./componentes/Tareas";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth, API } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

function App() {
  async function callApi() {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log({ token });
    const requestInfo = {
      headers: { Authorization: token },
    };
    const data = await API.get("ParcialFinal", "/parcial", requestInfo);
    console.log(data);
  }
  return (
    <main>
      <Tareas />
      <button onClick={callApi}>Call API</button>
    </main>
  );
}

export default withAuthenticator(App);
