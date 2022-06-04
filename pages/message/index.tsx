import React, {FC, memo, useState} from 'react'
import styles from "./msg.module.scss"
import Header from "~/component/Header/Header";
import {useFormik} from "formik";
import Texts from "~/component-system/Texts/Texts";
import TextInput from "~/component/TextInput/TextInput";
import {fetcher} from "~/lib/fetcher";
import {CREATE_MESSAGE} from "~/core/mutation";
import classNames from "classnames";

interface Props {

}

interface IFormik {
  content: string
  username: string
  email: string
  phoneNumber: string
}

const Msg: FC<Props> = memo(() => {
  const [contentError, setContentError] = useState<boolean>(false);
  const [userNameError, setUserNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [ani, setAni] = useState<boolean>(false);

  const {values, handleChange, handleSubmit, resetForm} = useFormik<IFormik>({
    initialValues: {
      content: "",
      username: "",
      email: "",
      phoneNumber: ""
    },
    onSubmit: async () => {
      let canSubmit = true

      if (!values.content) {
        setContentError(true);
        canSubmit = false
      }
      if (!values.username) {
        setUserNameError(true)
        canSubmit = false
      }
      if (!values.email) {
        setEmailError(true)
        canSubmit = false
      }

      if (canSubmit) {
        const res: { data: { createMessage: boolean } } = await fetcher.fetch().query(CREATE_MESSAGE, {
          data: {
            content: values.content,
            name: values.username,
            email: values.email,
            phoneNumber: values.phoneNumber
          }
        });
        if (res.data.createMessage) {
          resetForm();
          setAni(true)
        }
      }
    }
  });

  return (
    <div className={styles.msg}>
      <Header/>
      <div className={styles.title}>
        <Texts size={20} type={"NeoB"}>
          저에게 하고싶은 말을 남겨주세요.
        </Texts>
      </div>
      <div className={styles.userInputBox}>
        <div className={classNames(styles.result)}>
          {/*<span className={styles.ani}>*/}
          {/*😎*/}
          {/*</span>*/}
        </div>
        <form onSubmit={handleSubmit}>
        <textarea name="content" id="" value={values.content} placeholder={"내용을 입력해주세요."} onChange={handleChange}>
        </textarea>
          <TextInput
            value={values.username}
            name={"username"}
            placeHolder={"이름을 입력하세요"}
            handleChange={handleChange}
            className={styles.inputBox}
          />
          <TextInput
            value={values.email}
            name={"email"}
            placeHolder={"이메일을 입력하세요"}
            handleChange={handleChange}
            className={styles.inputBox}
          />
          <TextInput
            value={values.phoneNumber}
            name={"phoneNumber"}
            placeHolder={"핸드폰 번호를 입력하세요"}
            handleChange={handleChange}
            className={styles.inputBox}
          />
          <div className={styles.button}>
            <button>메세지 보내기</button>
          </div>
        </form>
      </div>
      {ani &&
      <div className={styles.response}>
         <Texts type={"NeoB"} className={styles.text}>
            감사합니다 😎
         </Texts>
      </div>
      }
    </div>
  )
})

export default Msg
