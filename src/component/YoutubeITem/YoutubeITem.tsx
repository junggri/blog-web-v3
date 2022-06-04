import React, {Dispatch, FC, memo, SetStateAction, useCallback} from 'react'
import styles from "./YoutubeITem.module.scss"
import Texts from "~/component-system/Texts/Texts";
import {YouTubeItem} from "../../../pages/youtube/type";

interface Props {
  data: YouTubeItem
  setTarget: Dispatch<SetStateAction<YouTubeItem | null>>
}

const YoutubeItem: FC<Props> = memo(({data, setTarget}) => {
  const url = data.snippet.thumbnails.maxres ? data.snippet.thumbnails.maxres.url : data.snippet.thumbnails.high.url

  const arrangeTime = useCallback((time: string): string => {

    function removeChar(index: number): number {
      const reg = /[0-9]/;

      if (time[index - 1].match(reg)) {
        return removeChar(index - 1);
      }
      return index;
    }

    const idx = time.indexOf("S");

    if (idx !== -1) {
      const returnIndex = removeChar(idx)
      return time.slice(0, returnIndex)
    }

    return time;
  }, [])


  const calculateTime = (target: YouTubeItem) => {

    let time = arrangeTime(target.contentDetails.duration)

    const reg = [/PT/g, /H/g, /M/g];
    const replaceWord = [" ", "시간 ", "분"];

    reg.forEach((e, i) => {
      time = time.replace(reg[i], replaceWord[i]);
    });

    return time;
  }

  const onClick = useCallback(() => {
    setTarget(data)
  }, [setTarget])

  return (
    <li className={styles.YoutubeItem} onClick={onClick}>
      <div className={styles.thumbnail}>
        <img src={url} alt=""/>
      </div>
      <div className={styles.meta}>
        <Texts size={14} type={"NeoB"} className={styles.desc}>
          {data.snippet.description}
        </Texts>
        <Texts size={20} type={"NeoB"} className={styles.title}>
          {data.snippet.localized.title}
        </Texts>
        <div className={styles.bottom}>
          <Texts className={styles.time} size={12} type={"L"}>
            방송시간 : {calculateTime(data)}
          </Texts>
          <Texts className={styles.date} size={12} type={"L"}>
            방송날짜 : 2022-04-02
          </Texts>
          <Texts className={styles.view} size={12} type={"L"}>
            조회 수 : {data.statistics.viewCount}회
          </Texts>
        </div>
      </div>
    </li>
  )
})

export default YoutubeItem
