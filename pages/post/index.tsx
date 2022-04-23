import React, {FC, memo, useEffect, useMemo} from 'react'
import styles from "./Post.module.scss"
import Header from "~/component/Header/Header";
import ListItem from "~/component/ListItem/ListItem";
import jsDay from "junggri-dayjs";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "~/reducer";
import {PostAction} from "~/reducer/post";

interface Props {
}

const Post: FC<Props> = memo(() => {
  const state = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PostAction.GET_PAGINATED_POST(12, 0, "open"))
  }, [])


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

