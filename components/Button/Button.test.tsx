import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from './Button'

describe('<Button />', () => {
  test('loads and displays Button', async () => {
    render(<Button>Button</Button>)

    const buttonElement = screen.getAllByTestId('button')

    expect(buttonElement[0].textContent).toBe('Button')
  })

  test('button callback should call when click', async () => {
    const mockClickCallBack = jest.fn()

    render(<Button onClick={mockClickCallBack}>Button</Button>)

    const buttonElement = screen.getAllByTestId('button')

    fireEvent.click(buttonElement[0])
    expect(mockClickCallBack.mock.calls.length).toEqual(1)
  })
})
