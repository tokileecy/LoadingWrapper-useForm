import React from 'react'
import { Story, Meta } from '@storybook/react'
import useForm from './useForm'
export default {
  title: 'utils/useForm',
} as Meta

interface LoginReq {
  account: string
  pwd: string
}

const validationRule = {
  account: (v: string) => v.length > 8,
  pwd: (v: string) => v.length > 12,
}

const Template: Story = () => {
  const [loginReq, formSetter, validationResult] = useForm<LoginReq>(
    { account: '', pwd: '' },
    validationRule
  )

  const doSubmit = async () => {
    if (validationResult.allFieldsValid()) {
      console.log(`send data: `, loginReq)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        doSubmit()
      }}
    >
      <label>Account</label>
      <input
        type="text"
        value={loginReq.account}
        onChange={formSetter.account}
      />
      <div className="invalid">{validationResult.account.error}</div>
      <label>Password</label>
      <input type="password" value={loginReq.pwd} onChange={formSetter.pwd} />
      <div className="invalid">{validationResult.pwd.error}</div>
      <button type="submit">submit</button>
    </form>
  )
}

export const Normal = Template.bind({})

Normal.args = {}
