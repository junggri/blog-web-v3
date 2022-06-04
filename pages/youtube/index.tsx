import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import styles from "./Youtube.module.scss";
import Header from "~/component/Header/Header";
import YoutubeItem from "~/component/YoutubeITem/YoutubeITem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "~/reducer";
import {YoutubeActions} from "~/reducer/youtube";
import {YouTubeItem} from "./type";
import Spinner from "~/component/Spinner/Spinner";
import useLoadMore from "~/hooks/useLoadMore";
import {PostAction} from "~/reducer/post";


interface Props {
}

const Youtube = memo(() => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.youtube);
  const [target, setTarget] = useState<YouTubeItem | null>(null)
  const [frameLoaded, setFrameLoaded] = useState<boolean>(false)
  const frameRef = useRef<HTMLDivElement | null>(null)

  const renderItem = useMemo(() => {
    if (!state.data) {
      return []
    }

    return state.data.map((e, i) => {
      return (
        <YoutubeItem key={e.etag} data={e} setTarget={setTarget}/>
      )
    })
  }, [state.data])

  const onClickOutSide = () => {

    window.addEventListener("mousedown", (e) => {
      if (!frameRef.current) return

      if (!frameRef.current.contains(e.target as any)) {
        setTarget(null)
        setFrameLoaded(false);
      }
    })
  }

  const onLoadState = useCallback(() => {
    setFrameLoaded(true)
  }, [frameLoaded])


  useLoadMore(() => {
    if (state.loading || !state.nextPageToken) return
    dispatch(YoutubeActions.GET_VIDEOS(state.nextPageToken))
  })

  useEffect(() => {
    dispatch(YoutubeActions.GET_VIDEOS(state.nextPageToken))
  }, [])

  return (
    <div className={styles.Youtube}>
      <Spinner loading={state.loading}/>
      <Header/>
      <ul className={styles.container}>
        {renderItem}
      </ul>
      {target &&
      <div className={styles.iframe} onClick={onClickOutSide}>
         <Spinner loading={!frameLoaded}/>
         <div className={styles.dimmer}/>
         <div className={styles.frameBox} ref={frameRef}>
            <iframe
               src={`https://www.youtube-nocookie.com/embed/${target.id}`}
               allowFullScreen={true}
               className={styles.frame}
               onLoad={onLoadState}
            />
         </div>
      </div>
      }
    </div>
  )
})

export default Youtube
