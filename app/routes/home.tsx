import { Link } from "react-router";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="flex items-center justify-center pt-16 pb-4">
  <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
    <header className="flex flex-col items-center gap-9">
      <div className="w-[500px] max-w-[100vw] p-4">
       
      </div>
    </header>
    <div className="max-w-[300px] w-full space-y-6 px-4">
      <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
            Aprendendo React
        </p>
        <ul>
          {resources.map(({ to, text, icon }) => (
            <li key={to} >
              
              <Link className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
               to={to}>
                {icon}
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
</main>;
}

const resources = [
  {
    to: '/auth/login', 
    text: 'Login', 
    icon:  ""
  }
]
