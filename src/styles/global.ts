import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
* {
  box-sizing: border-box;
  outline: 0;
}
:root {
  --color-background: #F0F2F5;
  --color-text: #FCFDFF;

  --color-primary: #41414C;
  --color-secondary: #6B59D3;
  --color-secondary-hover: #7B6ADC;
  
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-hairline-in-dark: #4F4F5B;
  --color-hairline-in-light: #E1E3E5;

  --color-card-background: var(--color-text);
  --color-card-title: #5A5A66;
  --color-card-label: #BFBFCC;
  --color-card-content: #787880;

  --color-cancel: #E1E3E5;
  --color-delete: #EB3B35; 
  --color-save: #36B336;
  
  --color-badge-progress-text: var(--color-save);
  --color-badge-progress-background: #E8F8E8;
  --color-badge-done-text: var(--color-delete);
  --color-badge-done-background:#FAECEB;

  --color-header-inner-title: var(--color-card-label)

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  background: #312E38;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body, input, button {
  font: 500 1rem Inter;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;