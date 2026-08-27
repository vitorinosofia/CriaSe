import type { DesignTokens } from  "../../types/tokens";

interface AlertProps{
    title: string;
    description: string;
    tokens: DesignTokens;
}
export function Alert({ title, description, tokens }: AlertProps){
    return(
        <div
         className="border border-gray-300 rounded-md p-4"
         style={{ borderRadius: tokens.radius, padding: tokens.spacingMd}}
         >
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}