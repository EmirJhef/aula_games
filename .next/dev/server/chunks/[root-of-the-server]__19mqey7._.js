module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/games.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
let listaGames = [
    {
        id: 1,
        titulo: 'Resident Evil',
        categoria: 'Terror'
    },
    {
        id: 2,
        titulo: 'Super Mario',
        categoria: 'Aventura'
    }
];
function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json(listaGames);
    }
    if (req.method === 'POST') {
        const { titulo, categoria } = req.body;
        if (!titulo || !categoria) {
            return res.status(400).json({
                erro: 'Preencha o título e a categoria'
            });
        }
        const novoGame = {
            id: Date.now(),
            titulo,
            categoria
        };
        listaGames.push(novoGame);
        return res.status(201).json(novoGame);
    }
    return res.status(405).json({
        mensagem: 'Erro, tente novamente'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__19mqey7._.js.map