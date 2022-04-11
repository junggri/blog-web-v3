import React, {FC, memo, useMemo} from 'react'
import styles from "./log.module.scss"
import Header from "~/component/Header/Header";
import LogItem from "~/component/LogItem/LogItem";

interface Props {

}

const Log: FC<Props> = memo(() => {

  const renderItem = useMemo(() => {
    return new Array(10).fill(0).map((e, i) => {
      return (
        <LogItem/>
      )
    })
  }, [])

  return (
    <div className={styles.Log}>
      <Header/>
      <div className={styles.logContainer}>
        {renderItem}
      </div>
    </div>
  )
})

export default Log
