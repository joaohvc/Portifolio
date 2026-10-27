function SobreMim() {
  return (
    <div
      className="bg-white w-full flex h-100 mt-10 rounded-xl p-5"
      id="SobreMim"
    >
      {/*div do sobre mim*/}
      <div className="w-1/2 flex items-center flex-col p-2">
        <h1 className="text-2xl font-bold text-blue-500 mb-5">SOBRE MIM</h1>
        <p className="font-medium">
          Me chamo João Henrique Viana do Carmo, tenho 19 anos e atualmente
          estou cursando Engenharia de Software. Estou em busca de oportunidades
          na área de desenvolvimento para aprimorar meus conhecimentos e
          adquirir experiência profissional, seja em Front-end, Back-end ou até
          mesmo como Full Stack. Tenho grande disposição para aprender e evoluir
          constantemente.Estou estudando Front-end e Back-end diariamente,
          aprimorando minhas habilidades e evoluindo constantemente em ambas as
          áreas.
        </p>
        <div className="flex w-full mb-2 mt-2">
          <img src="" alt="" />
          <a href="linkedin.com/in/joao-henrique-viana-do-carmo-ba6aa8327/">
            linkedin.com/in/joao-henrique-viana-do-carmo-ba6aa8327/
          </a>
        </div>
        <div className="flex w-full">
          <img src="" alt="" />
          <a href="https://github.com/joaohvc">https://github.com/joaohvc</a>
        </div>
      </div>
      {/*div da imagem*/}
      <div className="bg-gray-400 w-1/2"></div>
    </div>
  );
}

export default SobreMim;
