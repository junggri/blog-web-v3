import React, {FC, memo, useEffect, useMemo} from 'react'
import styles from "./log.module.scss"
import Header from "~/component/Header/Header";
import LogItem from "~/component/LogItem/LogItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "~/reducer";
import {PostAction} from "~/reducer/post";

interface Props {

}

const Log: FC<Props> = memo(() => {
  const state = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch()

  const renderItem = useMemo(() => {
    if (!state.data.log) {
      return []
    }

    return state.data.log.edges.map((e, i) => {
      return <LogItem data={e.node} key={e.node.id}/>
    })
  }, [state.data])


  useEffect(() => {
    dispatch(PostAction.GET_PAGINATED_POST(12, 0, "open", "log"))
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
