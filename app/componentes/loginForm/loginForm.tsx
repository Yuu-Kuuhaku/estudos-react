import React, { useState } from "react";
import { formDataExtractor } from "~/libs/utils";
import InputGroup from "../inputGroup/inputGroup";




interface LoginFormProps  {
  appearance?: 'normal' | 'label-placeholder' | undefined,
}


export default function LoginForm({appearance= 'normal'}:LoginFormProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [formData, setFormData] = useState({
    ['email'+appearance]: "",
    ['password'+appearance]: "",
  });

  const [erros, setErros] = useState({ password: [] } as any);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name == ("password"+appearance)) {
      const errosSenha = validatePassword(value);

      if (errosSenha.length > 0) {
        setErros({ password: errosSenha });
      } else {
        setErros({ password: [] });
      }
    }
  };

  const handleSubmit = (formData: FormData) => {
    const data = formDataExtractor(formData);
    const errosSenha = validatePassword(data['password'+appearance]);

    if (errosSenha.length > 0) {
      alert(`
        Erros: ${errosSenha
          .map((erro, i) => (i + 1).toString() + ") " + erro)
          .join(" ")}
      `);
      setErros({ password: errosSenha });
    } else {
      setErros({ password: [] });
      alert(`
        Bem Vindo ${data['email'+appearance]}. Você esta logado.
      `);
    }
  };

  const validatePassword = (password: any) => {
    const errosSenha = [];

    if (password.length < 8) {
      errosSenha.push("A senha deve ter pelo menos 8 caracteres.");
    }
    if (!/[A-Z]/.test(password)) {
      errosSenha.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errosSenha.push("A senha deve conter pelo menos um caractere especial.");
    }

    return errosSenha;
  };

  return (
    <>
      <div className="max-w-[300px] my-2 w-full m-auto p-[20px] bg-white text-black border-solid border border-black rounded-sm">
        <form action={handleSubmit}>
          <h2 className="mb-2 text-lg uppercase font-bold text-center">Login</h2>

          <InputGroup
            appearance={appearance}
            labelProps={{
              text: "E-mail:",
            }}
            InputProps={{
              id: "email"+ appearance,
              name: "email"+ appearance,
              type: "email",
              value: formData['email'+appearance],
              placeholder: " ",
              onChange: handleChange,
              required: false,
            }}
          ></InputGroup>

          <InputGroup
            appearance={appearance}
            labelProps={{
              text: "Senha:",
            }}
            InputProps={{
              id: "password"+ appearance,
              name: "password"+ appearance,
              type: mostrarSenha ? "text" : "password",
              value: formData['password'+appearance],
              onChange: handleChange,
              required: true,
              placeholder: " ",
              minLength: 8,
            }}
          >
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="absolute bg-none border-none cursor-pointer top-[22px] right-[5px]"
            >
              {mostrarSenha ? "🙈" : "👁️"}
            </button>
            {erros.password.length > 0 && (
              <div className="text-red-700 w-full">
                {<small>{erros.password[0]}</small>}
              </div>
            )}
          </InputGroup>

          <button
            type="submit"
            className="w-full p-[10px] bg-sky-500/50 rounded-sm cursor-pointer font-bold"
          >
            Entrar
          </button>
        </form>
      </div>

    </>
  );
}
