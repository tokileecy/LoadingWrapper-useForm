import React, { useCallback, useMemo, useState } from 'react'

type ValidationResult<T> = {
  [K in keyof T]: {
    error: string
  }
}

type FormSetter<T> = {
  [K in keyof T]: React.ChangeEventHandler<HTMLInputElement>
}

type ValidationRule<T> = {
  [K in keyof T]: (v: T[K]) => boolean
}

const createBaseValidationResult = <T extends Record<string, any>>(
  initData: T
) => {
  return (Object.keys(initData) as Array<keyof T>).reduce((acc, key) => {
    acc[key] = { error: '' }

    return acc
  }, {} as ValidationResult<T>)
}

export default function <T extends Record<string, any>>(
  initData: T,
  validationRule: ValidationRule<T>
) {
  const [data, setData] = useState<T>({ ...initData })

  const [validationResult, setValidationResult] = useState(
    createBaseValidationResult(initData)
  )

  const formSetter = useMemo(() => {
    return (Object.keys(initData) as Array<keyof T>).reduce<FormSetter<T>>(
      (acc, key) => {
        acc[key] = (e) => {
          setData((prev) => ({
            ...prev,
            [key]: e.target.value,
          }))
        }

        return acc
      },
      {} as FormSetter<T>
    )
  }, [])

  const allFieldsValid = useCallback(() => {
    let valid = true as boolean

    const result = (Object.keys(initData) as Array<keyof T>).reduce<
      ValidationResult<T>
    >((acc, key) => {
      if (!validationRule[key](data[key])) {
        valid = false
        acc[key] = { error: 'something went wrong' }
      }

      return acc
    }, createBaseValidationResult(initData))

    setValidationResult(result)

    return valid
  }, [data])

  return [data, formSetter, { ...validationResult, allFieldsValid }] as const
}
