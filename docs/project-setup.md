# Setup do projeto (Next.js — landing page)

## Documentação interna (`docs/`)

Na data da estruturação inicial (KAN-10), a pasta `docs/` **não existia** no repositório; não havia instruções adicionais de arquitetura ou de landing page além deste arquivo, criado para registrar o bootstrap e o fluxo local.

Quando surgirem guias em `docs/`, eles devem prevalecer sobre convenções genéricas descritas aqui.

## Bootstrap oficial

O projeto foi inicializado com a CLI oficial [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) (Next.js 16, App Router, TypeScript, Tailwind CSS v4, ESLint, diretório `src/`).

**Nota de ambiente:** em alguns ambientes o comando `npx create-next-app@latest .` pode falhar com “application path is not writable” quando executado diretamente na raiz do workspace. Nesse caso, gere o app em um diretório temporário gravável e copie os arquivos para a raiz do repositório (excluindo `node_modules` e `.next`), depois execute `npm install` na raiz.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build estático (landing)

O `next.config.ts` define `output: "export"`, gerando saída estática em `out/`:

```bash
npm run build
```

Os artefatos exportados ficam em `out/` e podem ser servidos por qualquer host de arquivos estáticos.

## Rotas públicas iniciais

| Rota            | Descrição                          |
|-----------------|-------------------------------------|
| `/`             | Página inicial da landing (stub)   |
| `/privacidade`  | Stub para política de privacidade  |
| `/termos`       | Stub para termos de uso            |

Estas páginas existem para evolução incremental do conteúdo da landing.
