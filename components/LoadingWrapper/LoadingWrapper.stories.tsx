import React from 'react'
import { Story, Meta } from '@storybook/react'
import LoadingWrapper, { LoadingWrapperProps } from './LoadingWrapper'

export default {
  title: 'components/LoadingWrapper',
  component: LoadingWrapper,
} as Meta

const StringTemplate: Story<LoadingWrapperProps<string>> = (args) => {
  return <LoadingWrapper {...args} />
}

export const StringCase = StringTemplate.bind({})

StringCase.args = {
  loadData: async () => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('String Case')
      }, 500)
    })
  },
  renderData: (data: string) => {
    return <div>{`string: ${data}`}</div>
  },
}

const NumberTemplate: Story<LoadingWrapperProps<number>> = (args) => {
  return <LoadingWrapper {...args} />
}

export const NumberCase = NumberTemplate.bind({})

NumberCase.args = {
  loadData: async () => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(1234)
      }, 500)
    })
  },
  renderData: (data: number) => {
    return <div>{`number: ${data}`}</div>
  },
}
