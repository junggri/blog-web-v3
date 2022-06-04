import React, {FC, memo, useState} from 'react'
import Texts from '~/component-system/Texts/Texts'
import styles from "./Header.module.scss"
import Link from "next/link";

interface Props {
}

const Header: FC<Props> = memo(() => {
  const [fontSize, setFontSize] = useState<number>(14)
  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <a>
            <Texts type={"NeoB"} size={25}>정그리 <span style={{color: "#0F3AD1", display: "block", marginLeft: 5}}>.</span></Texts>
          </a>
        </Link>
      </div>
      <div className={styles.subHeader}>
        <Link href={"/canvas"}>
          <a>
            <Texts type={"L"} size={fontSize} language={"en"}>CANVAS</Texts>
          </a>
        </Link>
        <Link href={"/log"}>
          <a>
            <Texts type={"L"} size={fontSize} language={"en"}>LOG</Texts>
          </a>
        </Link>
        <Link href={"/youtube"}>
          <a>
            <Texts type={"L"} size={fontSize} language={"en"}>YOUTUBE</Texts>
          </a>
        </Link>
        <Link href={"/message"}>
          <a>
            <Texts type={"L"} size={fontSize} language={"en"}>MSG</Texts>
          </a>
        </Link>
      </div>
    </header>
  )
})

export default Header
