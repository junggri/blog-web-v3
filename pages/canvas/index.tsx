import React, {memo} from 'react'
import styles from "./Canvas.module.scss"
import Header from "~/component/Header/Header";

const Canvas = memo(() => {
  return (
    <div className={styles.Canvas}>
      <Header/>
    </div>
  )
})

export default Canvas
