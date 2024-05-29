import Panel from "@/common/panelToSignIn";
import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <Panel>
      <SignUp />
    </Panel>
  );
}
