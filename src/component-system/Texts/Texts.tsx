import React, {FC, memo, ReactNode} from "react";
import styles from "./Texts.module.scss"
import classNames from "classnames";

interface Props {
  children: ReactNode
  language?: 'ko' | 'en'
  type?: "L" | "M" | "B" | "NeoB" | "Bolder",
  size?: number
  className?: string
}

const Texts: FC<Props> = memo(({children, language = "ko", type = "M", size = 16, className}) => {
  return (
    <div className={
      classNames(
        styles.Text,
        {[styles.ko]: language === "ko"},
        {[styles.en]: language === "en"},
        className)}
    >
      <span style={{fontSize: size}} className={classNames(styles[type])}>
        {children}
      </span>
    </div>
  )
})

export default Texts
