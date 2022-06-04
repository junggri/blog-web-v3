import React, {FC, memo, useCallback} from "react"
import styles from "./PostItem.module.scss"
import Header from "~/component/Header/Header";
import {GetStaticProps} from "next";
import {GET_POST} from "~/core/query";
import {fetcher} from "~/lib/fetcher";
import {Post} from "~/core/schema";
import parseDate from "~/lib/parseDate";
import Texts from "~/component-system/Texts/Texts";
import Link from "next/link";
import useTimeToRead from "~/hooks/useTimeToRead";


const postItem: React.NamedExoticComponent<Post> = memo((post: Post) => {
  const onClickGotoTop = useCallback(() => {
    window.scrollTo({top: 0});
  }, [])

  return (
    <div className={styles.PostItem}>
      <Header/>
      <article className={styles.postBody}>
        <h1>{post.title}</h1>
        <h2>{post.title}</h2>
        <div className={styles.meta}>
          <div>
            <Texts language={"en"} size={12} type={"L"}>
              {useTimeToRead(post.content)} min
            </Texts>
          </div>
          <div>
            {parseDate(new Date(post.createdAt))}
          </div>
        </div>
        <p className={styles.content}>
          {post.content}
        </p>
      </article>
      <div className={styles.buttons}>
        <Link href={"/post"}>
          <a>
            <Texts type={"L"} size={15} language={"en"} className={styles.text}>HOME</Texts>
          </a>
        </Link>
        <div onClick={onClickGotoTop}>
          <Texts type={"L"} size={15} language={"en"} className={styles.text}>GO TO TOP</Texts>
        </div>
      </div>
      <div className={styles.comment}>
        <div>댓글달기</div>
        <textarea name="comment" readOnly placeholder={"댓글기능이 일시적으로 비활성화 되었습니다."}/>
      </div>
    </div>
  )
})

export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {

  const {data} = await fetcher.fetch().query(GET_POST, {
    data: {
      postId: parseInt(params.id, 10)
    }
  });

  return {
    props: data.getPost
  }
}
export default postItem
