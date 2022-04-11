import React, {FC, memo} from 'react'
import styles from "./TextInput.module.scss"
import classNames from "classnames";

interface Props {
  value: string
  name: string,
  placeHolder: string
  handleChange: any
  className?: string
}

const TextInput: FC<Props> = memo(({value, name, placeHolder, handleChange, className}) => {
  return (
    <div className={classNames(styles.TextInput, className)}>
      <input type="text" name={name} value={value} placeholder={placeHolder} onChange={handleChange}/>
    </div>
  )
})

export default TextInput
