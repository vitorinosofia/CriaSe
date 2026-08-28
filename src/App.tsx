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
import { ShadowsPanel } from "./components/ui/ShadowPanel";
import { Type, Droplet, MoveHorizontal, Square ,  CloudFog} from "lucide-react";
import { SidebarNavItem } from "./components/ui/SidebarNavItem";


function App() {
  const [tokens, setTokens] = useState<DesignTokens>({
    colorPrimary: '#6C63FF',
    radius: '10px',
    spacingMd: '12px 24px',
    fontSizeMd: '16px',
    fontFamily: 'sans-serif', 
    shadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  })
  const [activePanel, setActivePanel] = useState<'colors' | 'typography' | 'spacing' | 'radius' | 'shadows'>('typography')
  ;
  return (
  <div className="h-screen flex flex-col bg-gray-50">
    <header className="h-16 border-b border-gray-200 bg-white flex items-center px-6">
      <span className="font-bold text-lg">Meu primeiro Design System</span>
    </header>

    <div className="flex-1 grid grid-cols-[280px_1fr_320px] gap-6 p-6 overflow-hidden">
      {/* Sidebar — SEM card, solta no fundo */}
      <section className="flex flex-col gap-6 overflow-auto">
  
       <nav className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold  text-black text-left">Elementos</h2>
    <SidebarNavItem icon={Type} label="Tipografia" active={activePanel === "typography"} onClick={() => setActivePanel("typography")} />
      {activePanel == "typography" && (
  <TypographyPanel tokens={tokens} onChange={setTokens} />
)}
    <SidebarNavItem icon={Droplet} label="Cores" active={activePanel === "colors"} onClick={() => setActivePanel("colors")} />
      {activePanel == "colors" && (
  <ColorsPanel tokens={tokens} onChange={setTokens} />
)}
    <SidebarNavItem icon={MoveHorizontal} label="Espaçamento" active={activePanel === "spacing"} onClick={() => setActivePanel("spacing")} />
      {activePanel == "spacing" && (
  <SpacingPanel tokens={tokens} onChange={setTokens} />
)}
    <SidebarNavItem icon={Square} label="Radius border" active={activePanel === "radius"} onClick={() => setActivePanel("radius")} />
      
{activePanel == "radius" && (
  <RadiusPanel tokens={tokens} onChange={setTokens} />
)}
<SidebarNavItem
  icon={CloudFog}
  label="Sombras"
  active={activePanel === "shadows"}
  onClick={() => setActivePanel("shadows")}
/>
{activePanel === "shadows" && (
  <ShadowsPanel tokens={tokens} onChange={setTokens} />
)}
  </nav>



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

