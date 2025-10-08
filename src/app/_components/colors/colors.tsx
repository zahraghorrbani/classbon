'use client';
import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";
const getTextColor=(backgroundColor:string):string=>
    colord(backgroundColor).isDark() ? '#dddddd' :'#333333'
export default function Colors() {
  return (
    <div className="flex flex-wrap justify-center" dir="ltr">
      {Object.entries(tailwindColors).map(([name, color]) => (
        <ColorBox key={name} name={name} color={color} />
      ))}
    </div>
  );
}

function ColorBox({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="w-96 h-60 flex flex-col item-center justify-center text-center uppercase"
      style={{ backgroundColor: color }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
}
