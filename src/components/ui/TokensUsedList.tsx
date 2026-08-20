import type { DesignTokens } from "../../types/tokens";

interface TokensUsedListProps {
    tokens: DesignTokens;
}

export function TokenUsedList({tokens}: TokensUsedListProps) {
const tokenEntries = Object.entries(tokens);
return(
   <ul>
    {tokenEntries.map(([ name, value]) => (
        <li key={name}>
            <span className="font-semibold">{name}:</span> {value}
        </li>
    ))}
   </ul>
)
}