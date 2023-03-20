import { act, renderHook } from '@testing-library/react'
import useForm from './useForm'
import { ChangeEvent } from 'react'

// we will need this mock on our next test
global.fetch = jest.fn()

const validationRule = {
  account: (v: string) => v.length > 8,
  pwd: (v: string) => v.length > 12,
}

describe('useForm', () => {
  it('check loginReq, formSetter, validationResult', async () => {
    const { result } = renderHook(() =>
      useForm({ account: '', pwd: '' }, validationRule)
    )

    const [loginReq, formSetter, validationResult] = result.current

    expect(loginReq.account).toBe('')
    expect(loginReq.pwd).toBe('')
    expect(typeof formSetter.account).toBe('function')
    expect(typeof formSetter.account).toBe('function')
    expect(validationResult.account.error).toBe('')
    expect(validationResult.pwd.error).toBe('')
  })

  it('should change value after formSetter called', async () => {
    const { result } = renderHook(() =>
      useForm({ account: '', pwd: '' }, validationRule)
    )

    act(() => {
      const e1 = {
        target: {
          value: 'jimlee-jimlee',
        },
      } as ChangeEvent<HTMLInputElement>

      result.current[1].account(e1)

      const e2 = {
        target: {
          value: '12345678901234567890',
        },
      } as ChangeEvent<HTMLInputElement>

      result.current[1].pwd(e2)
    })

    expect(result.current[0].account).toBe('jimlee-jimlee')
    expect(result.current[0].pwd).toBe('12345678901234567890')
  })

  it('should return error msg while validate failed', async () => {
    const { result } = renderHook(() =>
      useForm({ account: 'jimlee', pwd: '1234' }, validationRule)
    )

    act(() => {
      result.current[2].allFieldsValid()
    })

    expect(result.current[2].account.error).toBe('something went wrong')
    expect(result.current[2].pwd.error).toBe('something went wrong')
  })
})
