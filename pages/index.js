import { useState, useEffect } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');

  const carregarGames = async () => {
    const resposta = await fetch('/api/games');
    const dados = await resposta.json();
    setGames(dados);
  };

  useEffect(() => {
    carregarGames();
  }, []);

  const adicionarGame = async (e) => {
    e.preventDefault();
    if (!titulo || !categoria) return;

    await fetch('/api/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, categoria })
    });

    setTitulo('');
    setCategoria('');
    carregarGames();
  };

  return (
    <div className="p-8 font-sans max-w-[600px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎮 Biblioteca Games</h1>

      <form onSubmit={adicionarGame} className="flex gap-2.5 mb-8">
        <input
          type="text"
          placeholder="Título do Jogo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="p-2 flex-[2] border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="p-2 flex-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer transition-colors"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Jogos Cadastrados</h2>
      <ul className="list-none p-0 divide-y divide-gray-200">
        {games.map((game) => (
          <li
            key={game.id}
            className="p-3 flex justify-between items-center"
          >
            <span><strong>{game.titulo}</strong></span>
            <span className="text-gray-500">{game.categoria}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}