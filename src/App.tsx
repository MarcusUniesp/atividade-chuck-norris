import { useState } from "react";
import "./App.css";

function App() {
  // tipagem para a piada
  type Joke = {
    value: string;
  };

  // useState para a piada
  const [joke, setJoke] = useState<string>("");

  // useState para a imagem
  const [img, setImg] = useState<string>("/angry.jpg");

  // useState para o texto do botão
  const [buttonText, setButtonText] = useState<string>(
    "Gerar uma piada hilária"
  );

  // fetch API
  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");

      if (response.ok) {
        const data: Joke = await response.json();
        // Atualiza o estado com a piada
        setJoke(data.value);
        // Alterando a imagem ao chamar a api
        setImg("/boobies.gif");
        // Alterando o texto do botão ao chamar a api
        setButtonText("Mais uma piada hilária?");
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  return (
    <>
      <header>
        <img src="/logo.png" className="logo-header" />
      </header>
      <main>
        <img src={img} className="img-main" />
        <button onClick={fetchJoke} className="fetch-btn">
          {buttonText}
        </button>
        <p id="joke-text">{joke}</p>
      </main>
      <footer>
        <img src="/footer-gif.gif" />
        <p>
          Criado por <span>Marcus Vinicius</span>, aluno na uniesp
        </p>
      </footer>
    </>
  );
}

export default App;
