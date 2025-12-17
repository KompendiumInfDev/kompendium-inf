'use client';

import { getGithubLastEdit } from "fumadocs-core/content/github";

export default async function LastEditTime(props: {path: string}) {
    const lastModifiedTime = await getGithubLastEdit({
        owner: 'KompendiumInfDev',
        repo: 'kompendium-inf',
        // file path in Git
        path: `content/kompendium/${props.path}`,
      });

    return (
      <footer className='text-fd-muted-foreground italic text-sm'>Ostatnia zmiana: {lastModifiedTime?.toLocaleString() || 'Problem z załadowaniem'}</footer>
    )
}