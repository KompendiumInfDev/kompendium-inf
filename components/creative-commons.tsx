import Image from "next/image"
import Link from "fumadocs-core/link"

export default function CCIcons(props: {size: number}) {
    return (
        <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.pl" style={{ display: 'inline'}}>
            CC BY-SA 4.0
            <img src={"https://mirrors.creativecommons.org/presskit/icons/cc.svg"} width={props.size} height={props.size} style={{margin: 0, marginLeft: '0.2em', display: 'inline'}} alt=""/>
            <img src={"https://mirrors.creativecommons.org/presskit/icons/by.svg"} width={props.size} height={props.size} style={{margin: 0, marginLeft: '0.1em', display: 'inline'}} alt=""/>
            <img src={"https://mirrors.creativecommons.org/presskit/icons/sa.svg"} width={props.size} height={props.size} style={{margin: 0, marginLeft: '0.1em', display: 'inline'}} alt=""/>
        </Link>
    )
}