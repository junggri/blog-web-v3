import {FC, memo} from "react";
import Texts from "~/component-system/Texts/Texts";
import styles from "./IndexLink.module.scss"

interface Props {
  href: string
  title: string
  desc: string
}

const IndexLink: FC<Props> = memo(({href, title, desc}) => {
  return (
    <a href={href} target={"_blank"}>
      <Texts className={styles.link} size={24} type={"NeoB"}>
        {title}
        <span className={styles.detail}>{desc}</span>
      </Texts>
    </a>
  )
})

export default IndexLink
