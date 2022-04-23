import React, {FC, memo} from 'react'
import styles from "./ListItem.module.scss"
import Texts from "~/component-system/Texts/Texts";
import ListUserInteractionBox from "~/component/ListUserInteractionBox/ListUserInteractionBox";
import {Post} from "~/core/schema";
import parseDate from "~/lib/parseDate";

interface Props {
  data: Post
}

const ListItem: FC<Props> = memo(({data}) => {
  return (
    <div className={styles.ListItem}>
      <Texts size={22} type={"NeoB"} className={styles.title}>
        {data.title}
      </Texts>
      <Texts className={styles.content}>
        {data.content}
      </Texts>
      <Texts className={styles.date} size={12}>
        {parseDate(new Date(data.createdAt))}
      </Texts>
      <div className={styles.footer}>
        <ListUserInteractionBox/>
      </div>
    </div>
  )
})

export default ListItem
