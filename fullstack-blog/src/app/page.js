// const handleLogin = () =>{
//   const routes = useRouter();
//   routes.push('/login');
// }

import { Router } from "express";
const express = require('express');
const app = express();

const routes = Router();

const rotaLogin = () => {
  routes.get('/login', () => {
    console.log('ROTA DE LOGIN EXECUTADA COM SUCESSO!');
  });
 
}


app.use(routes);

export default function Home() {

  return (
    <main className="bg-neutral-700 flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-gray-400">HELLO WORLD</h1>
      <label>NOME:</label>
      <input placeholder="digite seu nome"></input>
      <a href="/login" onClick={ rotaLogin() } className="bg-blue-700">LOGIN</a>
    </main>
  );
}
