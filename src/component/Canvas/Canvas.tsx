import React, {memo, useEffect, useRef} from 'react'
import styles from "./Canvas.module.scss"
import {Draw} from "~/lib/canvas";

const Canvas = memo(() => {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = ref.current.getContext("2d")
    if (ctx) {
      const canvas = Draw.create(ctx)
    }
  }, [])

  return (
    <div className={styles.Canvas}>
      <canvas ref={ref}/>
    </div>
  )
})

export default Canvas
