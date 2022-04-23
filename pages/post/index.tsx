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


  const renderList = useMemo(() => {
    if (!state.data.post) {
      return []
    }

    return state.data.post.edges.map((e) => {
      return <ListItem data={e.node} key={e.node.id}/>
    })

  }, [state.data])

  useEffect(() => {
    dispatch(PostAction.GET_PAGINATED_POST(12, 0, "open", "post"))
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

