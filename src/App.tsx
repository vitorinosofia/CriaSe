import './App.css';
import { Button } from './components/ui/Button';
import { useState } from 'react';
import type { DesignTokens } from './types/tokens';
import { ColorsPanel } from './components/ui/ColorsPanel';
import { TypographyPanel } from './components/ui/TypographyPanel';
import { SpacingPanel } from './components/ui/SpacingPanel';
import { RadiusPanel } from './components/ui/RadiusPanel';
import { GeneratedCodePanel } from './components/ui/GeneratedCodePanel';
import { TokenUsedList } from './components/ui/TokensUsedList';

function App() {
  const [tokens, setTokens] = useState<DesignTokens>({
    colorPrimary: '#6C63FF',
    radius: '10px',
    spacingMd: '12px 24px',
    fontSizeMd: '16px',
    fontFamily: 'sans-serif', 
  });
   return (
  <div className="h-screen flex flex-col">
    <header className="h-16 border-b flex items-center px-6">
      <span className="font-bold text-lg">Meu primeiro Design System</span>
    </header>

    <div className="flex-1 grid grid-cols-[280px_1fr_320px] gap-6 p-6 overflow-hidden">
      <section className="flex flex-col gap-6 overflow-auto">
        <ColorsPanel tokens={tokens} onChange={setTokens} />
        <TypographyPanel tokens={tokens} onChange={setTokens} />
        <SpacingPanel tokens={tokens} onChange={setTokens} />
        <RadiusPanel tokens={tokens} onChange={setTokens} />
      </section>

      <section className="flex-1 flex items-center justify-center overflow-auto p-6 border rounded-xl gap-6">
        <div className="flex flex-col gap-4 items-center">
        <Button label="Button" tokens={tokens} />
        <Button label="Button" tokens={tokens} variant="secondary" />
        </div>
        <TokenUsedList tokens={tokens} />
      </section>

      <section className="border rounded-xl p-6 overflow-auto">
        
        <GeneratedCodePanel tokens={tokens} />
      </section>
    </div>
  </div>
);
}

export default App;

