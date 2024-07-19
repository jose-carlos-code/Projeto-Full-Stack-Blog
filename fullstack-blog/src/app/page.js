// const handleLogin = () =>{
//   const routes = useRouter();
//   routes.push('/login');
// }

"use client";

import axios from 'axios';
import { useState } from "react";


const rotaLogin = () => {
  routes.get('/login', () => {
    console.log('ROTA DE LOGIN EXECUTADA COM SUCESSO!');
  });
 
}

export default function Home() {

const [nome, setNome] = useState("");

  return (
    <main className="bg-neutral-700 flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-gray-400">HELLO WORLD</h1>
      <form action="/localhost:3001/gay" method='post' class="login">
        <input type="hidden" value={3}></input>
        <label>NOME:</label>
        <input placeholder="digite seu nome" onChange={event => {
          setNome(event.target.value);
        }} value={nome}></input> <br></br>
        <input type="submit" className="bg-black"></input>
      </form>
    </main>
  );
}
