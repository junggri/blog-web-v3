import type {NextPage} from 'next'
import styles from "~/styles/landing.module.scss";
import Header from "~/component/Header/Header";
import Texts from "~/component-system/Texts/Texts";
import useGeoLocation from "~/hooks/useGeoLocation";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {HitActions} from "~/reducer/hit";
import {RootState} from "~/reducer";

const Home: NextPage = () => {
  const geoLocation = process.env.NODE_ENV === "production" ? useGeoLocation() : null;
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.hit);

  useEffect(() => {
    dispatch(HitActions.GET_HIT())
  }, [])


  return (
    <div className={styles.landing}>
      <Header/>
      <div className={styles.landingSlogan}>
        <div>
          <Texts type={"NeoB"} size={30} className={styles.main} language={"en"}>
            HELLO, WELCOME TO ME 😎
          </Texts>
        </div>
        <Texts size={16} className={styles.slogan}>
          안녕하세요. 저의 블로그에 오신걸 환영합니다. 천천히 즐겁게 둘러보다가 가세요!
        </Texts>
      </div>
      <div className={styles.linkBox}>
        <Texts className={styles.title} size={20} type={"B"}>여기도 한번 가보세요!</Texts>
        <div className={styles.links}>
          <a href="https://junggri.notion.site/1fed7f6beaac4b5b86eaf7dbc9771e29" target={"_blank"}>
            <Texts className={styles.link} size={24} type={"NeoB"}>
              커리어
              <span className={styles.detail}>저의 노션페이지에요.</span>
            </Texts>
          </a>
          <a href="https://www.youtube.com/channel/UCYMk5JNU9mzsaP-ZhhgXpgg/playlists" target={"_blank"}>
            <Texts className={styles.link} size={24} type={"NeoB"}>
              유튜브
              <span className={styles.detail}>저의 라이브스트리밍 페이지에요.</span>
            </Texts>
          </a>
          <a href="https://brunch.co.kr/@0ab6a1f3d75e468" target={"_blank"}>
            <Texts className={styles.link} size={24} type={"NeoB"}>
              브런치
              <span className={styles.detail}>저의 일기장이에요.</span>
            </Texts>
          </a>
        </div>
      </div>
      <div className={styles.carrier}>
        <Texts className={styles.title} size={20} type={"B"}>이렇게 성장하고 있습니다</Texts>
        <div className={styles.company}>
          <span className={styles.name}>위에이알</span>
          <span>2021.06.01 ~ 2022.04.08</span>
        </div>
      </div>
    </div>
  )
}

export default Home

