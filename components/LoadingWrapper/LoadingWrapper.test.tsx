import React from 'react'
import { render, screen } from '@testing-library/react'
import LoadingWrapper from './LoadingWrapper'

const loadStringData = async () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('String Case')
    }, 500)
  })
}

const renderStringData = (data: string) => {
  return <div>{`string: ${data}`}</div>
}

describe('<LoadingWrapper />', () => {
  test('loads and displays LoadingWrapper', async () => {
    render(
      <LoadingWrapper loadData={loadStringData} renderData={renderStringData} />
    )

    const LoadingWrapperElement = screen.getAllByTestId('loading-wrapper')

    expect(LoadingWrapperElement[0].textContent).toBe('Loading~')
  })

  test('LoadingWrapper finished loading after 500ms', async () => {
    jest.useFakeTimers()
    jest.spyOn(global, 'setTimeout')
    render(
      <LoadingWrapper loadData={loadStringData} renderData={renderStringData} />
    )

    const LoadingWrapperElement = screen.getAllByTestId('loading-wrapper')

    setTimeout(() => {
      expect(LoadingWrapperElement[0].textContent).toBe(`string: String Case`)
    }, 501)
  })
})
