import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * { box-sizing: border-box; }

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
		font-family: 'Noto Sans KR', sans-serif;
		letter-spacing: -0.02em;
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
	
input:focus {
    outline: none;
  }

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	a {
		color: var(--black);
	}

	a, button, svg, g, path {
		transition: .2s all ease-in-out;
		// 보통 li에는 transition이 안 들어갑니다. 필요한 경우 GlobalStyle로 넣지 말고 개별적으로 넣어주세요.
	}

	img {
		max-width: 100%;
	}

	button[type],	label, input[type="checkbox"] {
		cursor: pointer;
	}

	input, button {
		font-family: inherit;
	}

	input[type="checkbox"] {
		width: 16px;
		height: 16px;
		border: 1px solid #bfc6d2;
		border-radius: 3px;
		appearance: none;
		background-color: white;
		background-size: 110% 110%;
		background-position: 50%;
		background-repeat: no-repeat;
		margin: 0;

		&:checked {
			background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'><path d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/></svg>");
			background-color: var(--blue);
			border-color: var(--blue);
		}
	}

  :root {
    --black: #101c33;
    --dim-black: #404a5c;
		--gray: #6f7785;
    --blue: #4285f4;
    --yellow: #fbbc04;
    --red: #ea4335;
    --green: #34a853;
  }
`;
export default GlobalStyle;
