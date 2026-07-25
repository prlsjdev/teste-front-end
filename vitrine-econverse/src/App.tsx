// src/App.tsx
import React from 'react';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { useProducts } from './hooks/useProducts';
import './styles/main.scss';

export const App: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="app-container">
      {/* Header Semântico */}
      <header role="banner">
        {/* Você pode adicionar sua Logo ou Navbar principal aqui futuramente */}
      </header>

      {/* Main principal do conteúdo */}
      <main>
        <section aria-labelledby="showcase-title">
          <div className="sectionTitleContainer">
            <h2 id="showcase-title" className="sectionTitle">
              Produtos relacionados
            </h2>
          </div>

          {/* Abas de Categorias */}
          <CategoryTabs />

          {/* Área temporária para teste da API */}
          <div style={{ maxWidth: '1280px', margin: '20px auto', padding: '0 16px' }}>
            {loading && <p>Carregando produtos...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!loading && !error && (
              <p>✅ {products.length} produtos carregados com sucesso da API!</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;