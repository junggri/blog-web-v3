import React, {FC, memo} from 'react'
import styles from "./msg.module.scss"
import Header from "~/component/Header/Header";
import {useFormik} from "formik";
import Texts from "~/component-system/Texts/Texts";
import TextInput from "~/component/TextInput/TextInput";

interface Props {

}

interface IFormik {
  content: string
  username: string
  email: string
  phoneNumber: string
}

const Msg: FC<Props> = memo(() => {

  const {values, handleChange} = useFormik<IFormik>({
    initialValues: {
      content: "",
      username: "",
      email: "",
      phoneNumber: ""
    },
    onSubmit: () => {
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
        <textarea name="username" id="" value={values.content} placeholder={"내용을 입력해주세요."}>
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
      </div>
      <div className={styles.button}>
        <button>제출</button>
      </div>
    </div>
  )
})

export default Msg
