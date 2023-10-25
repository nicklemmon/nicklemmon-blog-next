import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './button.js'

test('Button', async () => {
  const { getByText } = render(<Button to="/">Click Me</Button>)

  expect(getByText('Click Me')).not.toBeNull()
})
