import React, {FC, memo, useEffect, useMemo} from 'react'
import styles from "./log.module.scss"
import Header from "~/component/Header/Header";
import LogItem from "~/component/LogItem/LogItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "~/reducer";
import Spinner from "~/component/Spinner/Spinner";
import useLoadMore from "~/hooks/useLoadMore";
import {LogAction} from "~/reducer/log";

interface Props {

}

const Log: FC<Props> = memo(() => {
  const state = useSelector((state: RootState) => state.log);
  const dispatch = useDispatch()

  const renderItem = useMemo(() => {
    if (!state.data) {
      return (
        <div className={styles.not}>아직 글이 존재하지 않아요 ㅠ^ㅠ</div>
      )
    }

    return state.data.edges.map((e, i) => {
      return <LogItem data={e.node} key={e.node.id}/>
    })
  }, [state.data])


  useLoadMore(() => {
    if (state.loading || !state.data || !state.data.pageInfo.hasNextPage) return
    dispatch(LogAction.GET_PAGINATED_LOG(5, state.data.pageInfo.endCursor, "open"))
  })


  useEffect(() => {
    dispatch(LogAction.GET_PAGINATED_LOG(5, 0, "open"))
  }, [])

  return (
    <div className={styles.Log}>
      <Spinner loading={state.loading}/>
      <Header/>
      <div className={styles.logContainer}>
        {renderItem}
      </div>
    </div>
  )
})

export default Log
