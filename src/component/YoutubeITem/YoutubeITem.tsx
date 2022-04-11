import React, {memo} from 'react'
import styles from "./YoutubeITem.module.scss"
import Texts from "~/component-system/Texts/Texts";

interface Props {
}

const YoutubeItem = memo(() => {
  return (
    <div className={styles.YoutubeItem}>
      <div className={styles.thumbnail}>
        <img src="" alt=""/>
      </div>
      <div className={styles.meta}>
        <Texts size={20} type={"NeoB"}>
          제목
        </Texts>
        <div>
          <Texts className={styles.time} type={"L"} size={14}>
            방송시간 : 4시간
          </Texts>
          <Texts className={styles.date} size={14} type={"L"}>
            방송날짜 : 2022-04-02
          </Texts>
        </div>
      </div>
    </div>
  )
})

export default YoutubeItem
