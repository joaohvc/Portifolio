import { useState } from "react";

function Header() {
  const [projetos, setProjetos] = useState(false);

  function AtivarProjeto() {
    setProjetos((v) => !v);
  }
  function DropDownProjeto() {
    if (projetos === true) {
      return (
        <div className="bg-gray-50 shadow-2xl rounded-xl absolute flex flex-col">
          <button className="hover:bg-blue-500 hover:text-white cursor-pointer p-2 font-semibold hover:rounded-t-xl transition-all">
            <a href="#Projeto1">Tela de Login</a>
          </button>
          <button className="hover:bg-blue-500 hover:text-white cursor-pointer p-2 font-semibold hover:rounded-b-xl transition-all">
            <a href="#Projeto2">Site da JoluPijamas</a>
          </button>
        </div>
      );
    }
  }

  return (
    <div className=" bg-white h-20 w-full rounded-xl items-center flex p-4">
      <h1 className="text-3xl text-blue-500 font-bold mr-40">
        João Henrique Viana do Carmo
      </h1>
      <button className="hover:bg-blue-500 p-2 rounded-sm hover:text-white cursor-pointer transition-all mr-5">
        <a className="font-semibold" href="#SobreMim">
          Sobre Mim
        </a>
      </button>
      <div className="">
        <button
          onClick={AtivarProjeto}
          className="hover:bg-blue-500 font-semibold p-2 rounded-sm hover:text-white cursor-pointer transition-all"
        >
          Projetos
        </button>
        {DropDownProjeto()}
      </div>
    </div>
  );
}

export default Header;
