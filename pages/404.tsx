import React, {memo} from 'react'
import Texts from "~/component-system/Texts/Texts";
import styles from "../src/styles/404.module.scss";

const ErrorPage = memo(() => {
  return (
    <div className={styles.error}>
      <div className={styles.font}>
        <Texts language={"en"} className={styles.texts} type={"NeoB"}>
          NOT FOUND
        </Texts>
      </div>
    </div>
  )
})

export default ErrorPage
