import React, { ReactNode, useEffect, useMemo, useState } from 'react'

export interface LoadingWrapperProps<T extends string | number> {
  loadData: () => Promise<T>
  renderData: (data: T) => ReactNode
}

export default function LoadingWrapper<T extends string | number>(
  props: LoadingWrapperProps<T>
) {
  const { loadData, renderData } = props
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setData(await loadData())

      setIsLoading(false)
    }

    fetchData()
  }, [loadData])

  const renderDataNode = useMemo(() => {
    if (data === undefined) {
      return ''
    } else {
      return renderData(data)
    }
  }, [data, renderData])

  return <>{isLoading ? 'Loading~' : renderDataNode}</>
}
