import Tareas from "./componentes/Tareas";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth, API } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

export default function App() {
  async function callApi() {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log({ token });
    const requestInfo = {
      headers: { Authorization: token },
    };
    const data = await API.get("parcialAPI", "/parcial", requestInfo);
    console.log(data);
  }
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Tareas />
          <button onClick={callApi}>Call API</button>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
