import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * { box-sizing: border-box;  
		font-family: 'Noto Sans KR', sans-serif;
	}

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
	vertical-align: baseline;
	text-decoration: none;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
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
a {
	color: var(--black);
}
a, button,li {
	transition: .2s all ease-in-out;
}



    :root {
        --black: #101c33;
        --dim-black: #404a5c;
        --blue: #4285f4;
        --yellow: #fbbc04;
        --red: #ea4335;
        --green: #34a853;
    }
`;
export default GlobalStyle;
