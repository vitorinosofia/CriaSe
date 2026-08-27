import './App.css';
import { Button } from './components/ui/Button';
import { useState } from 'react';
import type { DesignTokens } from './types/tokens';
import { ColorsPanel } from './components/ui/ColorsPanel';
import { TypographyPanel } from './components/ui/TypographyPanel';
import { SpacingPanel } from './components/ui/SpacingPanel';
import { RadiusPanel } from './components/ui/RadiusPanel';
import { GeneratedCodePanel } from './components/ui/GeneratedCodePanel';
import { TokensUsedList } from './components/ui/TokensUsedList';
import { Input } from "./components/ui/Input";
import { Alert } from "./components/ui/Alert";

function App() {
  const [tokens, setTokens] = useState<DesignTokens>({
    colorPrimary: '#6C63FF',
    radius: '10px',
    spacingMd: '12px 24px',
    fontSizeMd: '16px',
    fontFamily: 'sans-serif', 
  });
  return (
  <div className="h-screen flex flex-col bg-gray-50">
    <header className="h-16 border-b border-gray-200 bg-white flex items-center px-6">
      <span className="font-bold text-lg">Meu primeiro Design System</span>
    </header>

    <div className="flex-1 grid grid-cols-[280px_1fr_320px] gap-6 p-6 overflow-hidden">
      {/* Sidebar — SEM card, solta no fundo */}
      <section className="flex flex-col gap-6 overflow-auto">
        <ColorsPanel tokens={tokens} onChange={setTokens} />
        <TypographyPanel tokens={tokens} onChange={setTokens} />
        <SpacingPanel tokens={tokens} onChange={setTokens} />
        <RadiusPanel tokens={tokens} onChange={setTokens} />
      </section>

      {/* Preview central — card com sombra */}
      <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center gap-4 overflow-auto">
        <div className="flex flex-wrap gap-4 items-start justify-center">
          <Button label="Primário" tokens={tokens} />
          <Button label="Secundário" tokens={tokens} variant="secondary" />
          <Input id="exemplo-input" label="" placeholder="Input exemplo" tokens={tokens} />
          <Alert title="Sucesso!" description="Ação realizada." tokens={tokens} />
        </div>
      </section>

      {/* Código gerado — card com sombra */}
      <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 overflow-auto flex flex-col gap-6">
        <GeneratedCodePanel tokens={tokens} />
        <TokensUsedList tokens={tokens} />
      </section>
    </div>
  </div>
);
}

export default App;

