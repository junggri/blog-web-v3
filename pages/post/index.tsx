import React, {FC, memo, useMemo} from 'react'
import styles from "./Post.module.scss"
import Header from "~/component/Header/Header";
import ListItem from "~/component/ListItem/ListItem";
import jsDay from "junggri-dayjs";

interface Props {
}

const Post: FC<Props> = memo(() => {


  const renderList = useMemo(() => {
    return new Array(10).fill(0).map((e, i) => {
      return (
        <ListItem key={i}/>
      )
    })
  }, [])


  return (
    <div className={styles.Post}>
      <Header/>
      <div className={styles.postContainer}>
        {renderList}
      </div>
    </div>
  )
})


export default Post
