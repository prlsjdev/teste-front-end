# 🛒 Vitrine de Produtos Relacionados (E-commerce)

Uma aplicação web moderna e responsiva de vitrine de produtos e-commerce, desenvolvida em **React**, **TypeScript** e **Sass (SCSS Modules)**. O projeto consome uma API de produtos, exibe um carrossel interativo.

---

## 🔧 Como Executar o Projeto

**Pré-requisitos**
Antes de começar, você precisará ter instalado em sua máquina:
Node.js (versão 16.x ou superior)
Gerenciador de pacotes npm ou yarn

- git clone [https://github.com/prlsjdev/teste-front-end.git](https://github.com/prlsjdev/teste-front-end.git).
- cd seu-repositorio.
- npm install ou yarn install.
- npm run dev yarn dev.
- Abra http://localhost:XXXX (ou a porta indicada no seu terminal).

## 🚀 Demonstração & Funcionalidades

- **📱 Responsividade Completa:** Adaptado para dispositivos móveis, tablets e telas de alta resolução.
- **🎠 Carrossel de Produtos Interativo:** Rolagem fluida com botões de navegação lateral e navegação por toque (_touch scroll_).
- **🔎 Modal de Detalhes:** Visualização expandida do produto ao clicar no card, contendo seletor de quantidade e atalho de fecho via tecla `Esc` ou clique fora.
- **🏷️ Filtros por Categoria:** Navegação entre abas de categorias (Celulares, Acessórios, Tablets, etc.).
- **🎨 Pixel Perfect & Design System:** Estilização baseada em tokens SCSS, variáveis de cor, fontes e tipografia fiéis ao protótipo do Figma.
- **⚡ Acessibilidade (a11y):** Marcação semântica (`main`, `section`, `header`, `dialog`), suporte a navegabilidade por teclado e leitores de tela.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca principal para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança e escalabilidade do código.
- **[Sass (SCSS Modules)](https://sass-lang.com/):** Estilização modularizada, garantindo escopo fechado sem vazamento de CSS.
- **[Vite](https://vitejs.dev/) / [Create React App](https://create-react-app.dev/):** Bundler e ambiente de desenvolvimento.

---

## 📐 Arquitetura de Pastas

A estrutura de pastas foi organizada seguindo os princípios de **Clean Code** e separação de responsabilidades:

```bash
src/
├── @types/            # Definições de tipos do TypeScript (ex: Product)
├── assets/            # Imagens, ícones e SVGs
├── components/        # Componentes React modularizados
│   ├── CategoryTabs/
│   ├── Header/
│   ├── ProductCard/
│   ├── ProductCarousel/
│   ├── ProductModal/
│   ├── RelatedProducts/
│   └── SectionTitle/
├── hooks/             # Custom Hooks (ex: useProducts para busca de dados)
├── styles/            # Estilos globais (_variables, _mixins, main.scss)
├── utils/             # Funções utilitárias (ex: formatCurrency)
├── App.tsx            # Orquestrador principal da aplicação
└── main.tsx           # Ponto de entrada da aplicação
```
