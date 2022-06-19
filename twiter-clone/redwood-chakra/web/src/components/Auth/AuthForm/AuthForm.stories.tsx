import { ComponentStoryFn } from '@storybook/react'

import AuthForm from './AuthForm'

export const generated: ComponentStoryFn<typeof AuthForm> = (args) => (
  <AuthForm {...args} />
)

export default {
  component: AuthForm,
}
