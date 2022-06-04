import type {NextPage} from 'next'
import styles from "~/styles/landing.module.scss";
import Header from "~/component/Header/Header";
import Texts from "~/component-system/Texts/Texts";
import useGeoLocation from "~/hooks/useGeoLocation";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {HitActions} from "~/reducer/hit";
import {RootState} from "~/reducer";
import IndexLink from "~/component/IndexLink/IndexLink";
import CarrierLink from '~/component/CarrierLink/carrierLink';

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
          <IndexLink
            href={'https://juenggri.notion.site/1fed7f6beaac4b5b86eaf7dbc9771e29'}
            title={"노션"}
            desc={"저의 노션 페이지에요."}
          />
          <IndexLink
            href={'https://www.youtube.com/channel/UCYMk5JNU9mzsaP-ZhhgXpgg/playlists'}
            title={"유튜브"}
            desc={"저의 라이브스트리밍 페이지에요."}
          />
          <IndexLink
            href={'https://www.youtube.com/watch?v=j09r0YQc2Qk&list=PLwaHjBUqDBdvpc7ly7DfKlwT0FejxqGcY'}
            title={"강의"}
            desc={"저의 강의 페이지에요."}
          />
        </div>
      </div>
      <div className={styles.carrier}>
        <Texts className={styles.title} size={20} type={"B"}>이렇게 나아가고 있습니다.</Texts>
        <CarrierLink
          href={'https://we-ar.kr/'}
          title={"위에이알"}
          duration={"2021.06.01 - 2022.04.08"}
        />
        <CarrierLink
          href={'https://www.supremainc.com/ko/'}
          title={"슈프리마"}
          duration={"2022.05.30 - NOW WORKING"}
        />
      </div>
    </div>
  )
}

export default Home

