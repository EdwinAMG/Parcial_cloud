import Tareas from "./componentes/Tareas";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth, API } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Tareas />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
