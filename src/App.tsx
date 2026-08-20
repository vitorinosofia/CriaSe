import './App.css';
import { Button } from './components/ui/Button';
import { useState } from 'react';
import type { DesignTokens } from './types/tokens';
import { ColorsPanel } from './components/ui/ColorsPanel';

function App() {
  const [tokens, setTokens] = useState<DesignTokens>({
    colorPrimary: '#6C63FF',
    radius: '10px',
    spacingMd: '12px 24px',
    fontSizeMd: '16px',
    fontFamily: 'sans-serif', // <- estava 'sans-sarif'
  });
  return (
    <div className="p-10 font-sans">
      <h1 className="text-2xl font-bold mb-4"> Meu Design System</h1> {/* <- estava 'text-2x1' */}

      <ColorsPanel tokens={tokens} onChange={setTokens} />

      <Button label="Button" tokens={tokens} />
    </div>
  );
}

export default App;

