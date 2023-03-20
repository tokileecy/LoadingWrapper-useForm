---
to: <%= absPath %>/<%= Component_name %>.tsx
---
import React, { ReactNode } from 'react';
import * as styles from './<%= Component_name %>.styles'

export interface <%= Component_name %>Props {
  children?: ReactNode
}

export default function <%= Component_name %>(props: <%= Component_name %>Props) {
  const { children } = props

  return (
    <div className={styles.root}>{children}</div>
  )
}
