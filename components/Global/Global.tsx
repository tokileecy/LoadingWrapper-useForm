import { Global as BaseGlobal, css } from '@emotion/react'

export default function Global() {
  return (
    <BaseGlobal
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        body.hidden {
          visibility: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        @media (prefers-color-scheme: dark) {
          html {
            color-scheme: dark;
          }
          body {
            color: white;
            background: black;
          }
        }

        .invalid {
          color: red;
        }
      `}
    />
  )
}
