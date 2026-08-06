let listaGames = [
  { id: 1, titulo: 'Resident Evil', categoria: 'Terror' },
  { id: 2, titulo: 'Super Mario', categoria: 'Aventura' }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(listaGames);
  }

  if (req.method === 'POST') {
    const { titulo, categoria } = req.body;

    if (!titulo || !categoria) {
      return res.status(400).json({ erro: 'Preencha o título e a categoria' });
    }

    const novoGame = {
      id: Date.now(),
      titulo,
      categoria
    };

    listaGames.push(novoGame);
    return res.status(201).json(novoGame);
  }

  return res.status(405).json({ mensagem: 'Erro, tente novamente' });
}