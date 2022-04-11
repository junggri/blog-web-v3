import React, {memo, useMemo} from 'react'
import styles from "./Youtube.module.scss";
import Header from "~/component/Header/Header";
import YoutubeItem from "~/component/YoutubeITem/YoutubeITem";


interface Props {
}

const Youtube = memo(() => {

  const renderItem = useMemo(() => {
    return new Array(10).fill(0).map((e, i) => {
      return (
        <YoutubeItem key={i}/>
      )
    })
  }, [])

  return (
    <div className={styles.Youtube}>
      <Header/>
      <div className={styles.container}>
        {renderItem}
      </div>
    </div>
  )
})

export default Youtube
