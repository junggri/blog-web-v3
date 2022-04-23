import React, {FC, memo} from 'react'
import styles from "./ListUserInteractionBox.module.scss"
import Texts from "~/component-system/Texts/Texts";

interface Props {

}

const ListUserInteractionBox: FC<Props> = memo(() => {
  return (
    <div className={styles.userInteraction}>
      <div>
        <Texts language={"en"} type={"L"} size={12} className={styles.item}>
          likes
        </Texts>
      </div>
      <div>
        <Texts language={"en"} type={"L"} size={12} className={styles.item}>
          dislikes
        </Texts>
      </div>
    </div>
  )
})


export default ListUserInteractionBox
