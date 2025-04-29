import { Link } from "react-router";
import type { Route } from "./+types/home";
import LoginForm from "~/componentes/loginForm/loginForm";
import LoginForm2 from "~/componentes/loginForm/loginForm2";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login aprendizado" },
    { name: "description", content: "Aprendendo React!" },
  ];
}

export default function Login() {
  return <main className="flex items-center justify-center pt-16 pb-4">
  <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
    <div className="max-w-[300px] w-full space-y-6 px-4">
      <LoginForm />

      <LoginForm2 appearance="label-placeholder"/>

    </div>
  </div>
</main>;
}
