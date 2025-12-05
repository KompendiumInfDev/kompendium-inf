import { Card } from "fumadocs-ui/components/card";

export function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 flex-1 p-8 me-(--fd-toc-width)">
        <h1 className="text-4xl font-bold font-mono">Nie Znaleziono Strony.</h1>
      </div>
    );
  }