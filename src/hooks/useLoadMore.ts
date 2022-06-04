import {useWindowSize} from "~/hooks/useWinowSize";
import {useScroll} from "~/hooks/useScroll";
import {useEffect} from "react";

export default function useLoadMore(callback: () => void, threshold: number = 200) {
  const [width, height] = useWindowSize();
  const [x, y] = useScroll();


  useEffect(() => {
    if (typeof window !== "object") {
      return;
    }
    if (document.body.scrollHeight <= height + y + threshold) {

      callback();
    }

  }, [callback, y]);
}
