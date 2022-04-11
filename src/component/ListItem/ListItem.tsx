import React, {FC, memo} from 'react'
import styles from "./ListItem.module.scss"
import Texts from "~/component-system/Texts/Texts";
import jsDay from "junggri-dayjs";
import ListUserInteractionBox from "~/component/ListUserInteractionBox/ListUserInteractionBox";

interface Props {

}

const ListItem: FC<Props> = memo(() => {
  const now = jsDay.getKoreanTime();

  return (
    <div className={styles.ListItem}>
      <Texts size={22} type={"NeoB"} className={styles.title}>
        테스트
      </Texts>
      <Texts className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda at beatae, culpa delectus, nisi odit quibusdam rem, sed totam velit vero voluptates? Atque dolor minus mollitia
        tempore. Laudantium, repellat.
      </Texts>
      <Texts className={styles.date} size={12}>
        {now}
      </Texts>
      <div className={styles.footer}>
        <ListUserInteractionBox/>
      </div>
    </div>
  )
})

export default ListItem
