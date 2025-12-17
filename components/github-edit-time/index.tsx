'use client';

import { getGithubLastEdit } from "fumadocs-core/content/github";
import { useEffect, useState } from "react";

export default function LastEditTime(props: {path: string}) {
    const [time, setTime] = useState("Ładuję...")

    useEffect(() => {
        const fetchData = async () => {
            try {
            const lastModifiedTime = await getGithubLastEdit({
                owner: 'KompendiumInfDev',
                repo: 'kompendium-inf',
                // file path in Git
                path: `content/kompendium/${props.path}`,
            });
            setTime(lastModifiedTime ? lastModifiedTime.toLocaleString('pl-PL', {day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute:'2-digit'}) : 'Problem z załadowaniem.')
            } catch(err) {
                setTime('Problem z załadowaniem.')
            }
        }

        fetchData();
    })


    return (
      <footer className='text-fd-muted-foreground italic text-sm'>Ostatnia zmiana: {time}</footer>
    )
}