# HTML

## 표준

> [HTML5 vs XHTML](https://www.geeksforgeeks.org/difference-between-xhtml-and-html5/)

- XHTML (XML-based)
  - 좋은 시도였으나, **사람에게 친절하지 못했다.**
    - 이미 사용되고 있는 document 들을 옮기는 작업에 들어가는 비용이 너무 컸다.
    - 너무 strict 했다.
- HTML5 spec
  - Tim Berners-Lee 가 고안
  - 현재 WHATWG 에서 관리
  - W3C 의 recommendation

## 역사

### IE 독점으로 일어난 문제와 해결

**문제**

- 기술 발전 속도의 저하
- 표준에 어긋나는 API 들

**해결**

- 강력한 경쟁 제품의 출현: Google Chrome
- 모바일 환경을 고려한 브라우저의 등장

### 현재 시점의 브라우저 점유율과 이를 알아보는 것이 중요한 이유

- Top five browser
  - Chrome
  - Safari
  - Edge
  - Firefox
  - Samsung Internet
- 개발할 때 고려해야할 브라우저 환경을 정해야 하기 때문

### Browser Engines

> [Comparison of browser engines](https://en.wikipedia.org/wiki/Comparison_of_browser_engines)

- HTML document, css -> webpage

### Modern Browsers features

- PWA
- WASM
- WebGL
- caching
- so on...

## HTML document structure

### `<head>` 에 들어가는 엘리먼트들

- metadata 관련 (title, description, favicon, og:title...)
- stylesheet, js source code 등의 리소스

### Semantic Element

> [w3cschool - semantic element](https://www.w3schools.com/html/html5_semantic_elements.asp)
>
> [Semantics - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

- `<div>` 나 `<span>` 대신 `<main>` 이나 `<article>` 같이 **의미를 내포**하는 것

### block-level element vs inline element

- `<div>` vs `<span>`

## More

- [XML - wikipedia](https://en.wikipedia.org/wiki/XML)
- YAML
  - data serialization langauge
  - not mark up language
- Markdown
  - minimal mark up langauge
