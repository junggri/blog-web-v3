import React, {FC, memo, useEffect, useMemo, useRef} from 'react'
import styles from "./Post.module.scss"
import Header from "~/component/Header/Header";
import ListItem from "~/component/ListItem/ListItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "~/reducer";
import {PostAction} from "~/reducer/post";
import Spinner from "~/component/Spinner/Spinner";
import Link from "next/link";
import useLoadMore from "~/hooks/useLoadMore"


interface Props {
}

const Post: FC<Props> = memo(() => {
  const state = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch()


  const renderList = useMemo(() => {
    if (!state.data) {
      return []
    }

    return state.data.edges.map((e) => {
      return (
        <Link href={`/post/${e.node.id}`} key={e.node.id}>
          <a>
            <ListItem data={e.node}/>
          </a>
        </Link>
      )
    })

  }, [state.data])

  useLoadMore(() => {
    if (state.loading || !state.data || !state.data.pageInfo.hasNextPage) return
    dispatch(PostAction.GET_PAGINATED_POST(5, state.data.pageInfo.endCursor, "open"))
  })

  useEffect(() => {
    dispatch(PostAction.GET_PAGINATED_POST(5, 0, "open"))
  }, [])

  return (
    <div className={styles.Post}>
      <Spinner loading={state.loading}/>
      <Header/>
      <div className={styles.postContainer}>
        {renderList}
      </div>
    </div>
  )
})


export default Post

