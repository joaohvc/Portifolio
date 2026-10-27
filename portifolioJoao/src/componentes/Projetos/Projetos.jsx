function Projeto1() {
  return (
    <div className="bg-white w-full flex flex-col mt-5 p-4 rounded-xl">
      {/*div do primeiro projeto*/}
      <div className="flex mb-5" id="Projeto1">
        <div className="w-1/2">
          <img
            className=" rounded-xl "
            src="https://placehold.co/600x400"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-3xl font-bold text-blue-500">TELA DE LOGIN</h1>
          <p className="font-semibold mt-10 mb-35">
            Desenvolvi um projeto focado em autenticação de usuários para
            aprimorar minhas habilidades em JavaScript. O sistema conta com
            interfaces de login e cadastro, onde implementei uma lógica robusta
            de validação de campos no front-end, garantindo uma melhor
            experiência de usuário (UX) e a integridade dos dados enviados.
          </p>
          <button className="bg-blue-500 p-3 rounded-2xl font-semibold hover:text-white transition-all cursor-pointer">
            <a href="https://github.com/joaohvc/javaScript-Estudo-.git">
              PROJETO NO GIT
            </a>
          </button>
        </div>
      </div>
      <div className="bg-blue-500 w-full h-2"></div>
      {/*div do segundo projeto*/}
      <div className="flex mt-5" id="Projeto2">
        <div className="flex flex-col items-center w-1/2 ">
          <h1 className="text-3xl font-bold text-blue-500">SITE JOLUPIJAMAS</h1>
          <p className="font-semibold mt-10 mb-35">
            Estou desenvolvendo o novo e-commerce da JoluPijamas, um projeto
            focado em escalar as vendas online da marca. Com um público
            majoritariamente mobile, priorizei o design responsivo e a
            performance. Irei implementar fluxos de login e cadastro com validações
            em JavaScript para garantir uma jornada de compra segura, fluida e
            intuitiva para os clientes, independentemente do dispositivo que
            utilizem.
          </p>
          <button className="bg-blue-500 p-3 rounded-2xl font-semibold hover:text-white transition-all cursor-pointer">
            <a href="">PROJETO NO GIT</a>
          </button>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            className=" rounded-xl "
            src="https://placehold.co/600x400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Projeto1;
