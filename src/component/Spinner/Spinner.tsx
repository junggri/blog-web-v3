import React, {FC, memo} from 'react'
import styles from "./Spinner.module.scss"
import {BiLoaderAlt} from "react-icons/bi"

interface Props {
  loading: boolean
}

const Spinner: FC<Props> = memo(({loading}) => {
  return (
    <div className={styles.Spinner}>
      {loading &&
      <span className={styles.icon}><BiLoaderAlt/></span>
      }
    </div>
  )
});

export default Spinner

