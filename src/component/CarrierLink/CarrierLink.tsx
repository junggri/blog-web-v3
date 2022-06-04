import React, {FC, memo} from "react";
import Link from "next/link";
import styles from "./CarrierLink.module.scss";

interface Props {
  href: string
  title: string
  duration: string
}

const carrierLink: FC<Props> = memo(({href, title, duration}) => {
  return (
    <Link href={href}>
      <div className={styles.link}>
        <span>{title}</span>
        <span>{duration}</span>
      </div>
    </Link>
  )
})

export default carrierLink
