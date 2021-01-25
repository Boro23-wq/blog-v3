import { tint } from "@theme-ui/color"

const code = {
  "[data-name='live-editor']": {
    fontSize: 1,
    "textarea, pre": {
      padding: (t: any) => `${t.space[3]} !important`,
    },
  },
  "[data-name='live-preview']": {
    padding: (t: any) => `calc(${t.space[2]} + 10px) !important`,
    backgroundColor: tint(`primary`, 0.7),
  },
  ".prism-code": {
    fontSize: [1, 1, 2],
    padding: `2rem 1rem 1rem 1rem`,
    webkitOverflowScrolling: `touch`,
    backgroundColor: `transparent`,
    minWidth: `100%`,
    mb: 0,
    mt: 0,
    overflow: `auto`,
    '&[data-linenumber="false"]': {
      ".token-line": {
        pl: 3,
      },
    },
  },
  ".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']": {
    ".prism-code": {
      pt: `1rem`,
    },
  },
  ".token": {
    display: `inline-block`,
  },
  "p > code, li > code": {
    bg: `rgba(11,16,21)`,
    border: `0.5px solid rgba(245,245,245, 0.175)`,
    color: `rgb(245,245,245)`,
    px: 1,
    py: 1,
    borderRadius: `4px`,
  },
  ".gatsby-highlight": {
    fontSize: [1, 1, 2],
    position: `relative`,
    webkitOverflowScrolling: `touch`,
    bg: `rgb(1, 22, 39)`,
    borderRadius: `2px`,
    mx: [0, 0, 0, -3],
    ".token-line": {
      mx: -3,
      minWidth: `100%`,
    },
    "pre code": {
      float: `left`,
      minWidth: `100%`,
    },
    'pre[class*="language-"]:before': {
      bg: `white`,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: `black`,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0,
    },
    // 'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before': {
    //   content: `"js"`,
    //   background: `#f7df1e`,
    //   color: `black`,
    // },
    // // 'pre[class~="language-jsx"]:before': {
    // //   content: `"jsx"`,
    // //   background: `#61dafb`,
    // //   color: `black`,
    // // },
    // // 'pre[class~="language-ts"]:before': {
    // //   content: `"ts"`,
    // //   background: `#61dafb`,
    // //   color: `black`,
    // // },
    // // 'pre[class~="language-tsx"]:before': {
    // //   content: `"tsx"`,
    // //   background: `#61dafb`,
    // //   color: `black`,
    // // },
    // // 'pre[class~="language-html"]:before': {
    // //   content: `"html"`,
    // //   background: `#005a9c`,
    // //   color: `white`,
    // // },
    // // 'pre[class~="language-xml"]:before': {
    // //   content: `"xml"`,
    // //   background: `#005a9c`,
    // //   color: `white`,
    // // },
    // // 'pre[class~="language-svg"]:before': {
    // //   content: `"svg"`,
    // //   background: `#005a9c`,
    // //   color: `white`,
    // // },
    // // 'pre[class~="language-graphql"]:before': {
    // //   content: `"GraphQL"`,
    // //   background: `#E10098`,
    // // },
    // // 'pre[class~="language-css"]:before': {
    // //   content: `"css"`,
    // //   background: `#ff9800`,
    // //   color: `black`,
    // // },
    // // 'pre[class~="language-mdx"]:before': {
    // //   content: `"mdx"`,
    // //   background: `#f9ac00`,
    // //   color: `black`,
    // // },
    // // 'pre[class~="language-php"]:before': {
    // //   content: `"php"`,
    // //   background: `#777bb3`,
    // //   color: `black`,
    // // },
    // // 'pre[class~="language-py"]:before, pre[class~="language-python"]:before': {
    // //   content: `"py"`,
    // //   background: `#306998`,
    // //   color: `white`,
    // // },
    // 'pre[class~="language-text"]:before': {
    //   content: `"text"`,
    // },
    // "pre[class~='language-shell']:before": {
    //   content: `'shell'`,
    // },
    // "pre[class~='language-sh']:before": {
    //   content: `'sh'`,
    // },
    // "pre[class~='language-bash']:before": {
    //   content: `'bash'`,
    // },
    // "pre[class~='language-yaml']:before": {
    //   content: `'yaml'`,
    //   background: `#ffa8df`,
    // },
    // "pre[class~='language-yml']:before": {
    //   content: `'yml'`,
    //   background: `#ffa8df`,
    // },
    // "pre[class~='language-markdown']:before": {
    //   content: `'md'`,
    // },
    // "pre[class~='language-json']:before, pre[class~='language-json5']:before": {
    //   content: `'json'`,
    //   background: `linen`,
    // },
    // "pre[class~='language-diff']:before": {
    //   content: `'diff'`,
    //   background: `#e6ffed`,
    // },
  },
  '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]': {
    wordSpacing: `normal`,
    wordBreak: `normal`,
    overflowWrap: `normal`,
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: `none`,
  },
  ".gatsby-highlight pre::-webkit-scrollbar": {
    width: 2,
    height: 2,
  },
  ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
    backgroundColor: `primary`,
  },
  ".gatsby-highlight pre::-webkit-scrollbar-track": {
    background: `rgb(1, 22, 39)`,
  },
  ".line-number-style": {
    display: `inline-block`,
    width: `3em`,
    userSelect: `none`,
    opacity: 0.3,
    textAlign: `center`,
    position: `relative`,
  },
  ".code-title": {
    backgroundColor: `#012440`,
    color: `white`,
    fontSize: 0,
    px: 3,
    py: 2,
    fontFamily: `monospace`,
    mx: [0, 0, 0, -3],
  },
  "[data-name='live-preview'], [data-name='live-editor']": {
    mx: [0, 0, 0, -3],
    fontSize: [1, 1, 2],
    backgroundColor: `#012440`
  },
  ".token-line": {
    pr: 3,
  },
  ".highlight-line": {
    backgroundColor: `rgba(110, 125, 154,0.08)`,
    borderLeft: `4px solid rgba(110, 125, 154, 0.5)`,
    ".line-number-style": {
      width: `calc(3em - 4px)`,
      opacity: 0.5,
      left: `-2px`,
    },
  },
  ".react-live-wrapper": {
    position: `relative`,
    right: [0, 0, 0, -10],
  },
  ".code-copy-button": {
    borderRadius: 4,
    background: 'none',
    color: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    right: [0, 0, 0, 10],
    top: [0, 0, 0, 10],
    transition: 'background 0.3s ease',
  },
  ".code-copy-button:hover": {
    color: 'rgba(255,255,255,0.25)',
    backgroundColor: 'rgba(255,255,255,0.065)',
  }
}

export default code
