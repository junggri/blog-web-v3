import React, {FC, memo} from 'react'
import styles from "./LogItem.module.scss"
import Texts from "~/component-system/Texts/Texts";
import {Post} from "~/core/schema";
import parseDate from "~/lib/parseDate";

interface Props {
  data: Post
}

const LogItem: FC<Props> = memo(({data}) => {

  return (
    <div className={styles.logItem}>
      <Texts size={22} type={"NeoB"} className={styles.title}>
        {data.title}
      </Texts>
      <Texts className={styles.content}>
        {data.content}
      </Texts>
      <Texts className={styles.date} size={12}>
        {parseDate(new Date(data.createdAt))}
      </Texts>
    </div>
  )
})

export default LogItem
