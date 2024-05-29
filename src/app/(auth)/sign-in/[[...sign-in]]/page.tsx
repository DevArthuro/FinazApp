import Panel from "@/common/panelToSignIn";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <Panel>
      <SignIn />
    </Panel>
  );
}
