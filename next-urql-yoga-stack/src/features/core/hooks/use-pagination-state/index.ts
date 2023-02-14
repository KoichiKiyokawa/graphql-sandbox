import { useCallback, useState } from "react"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePaginationState = () => {
  const [page, setPage] = useState(0)
  const goPrev = useCallback(() => {
    setPage((prev) => prev - 1)
  }, [])
  const goNext = useCallback(() => {
    setPage((prev) => prev + 1)
  }, [])
  return { page, goPrev, goNext }
}
