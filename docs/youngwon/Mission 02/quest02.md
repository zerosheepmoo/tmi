# Q2

1. CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?
    세 가지 방법 각각의 장단점은 무엇일까요?
    Inline - declared with html attributes
        Pros: Quick and useful for testing
        Cons: Must style each element individually. Can make code look messy
    Internal - declared inside the same html file. Must use the <style> tag
        Pros: Class and ID selectors can be used
        Cons: Ok for a single page but too time consuming for multiple pages and increase loading time and space
    External: - declared and called from an external file
        Pros: You can edit the whole site in just one file
        Cons: Pages may not be rendered correctly if css is not loaded

2. CSS 규칙의 우선순위는 어떻게 결정될까요?
    1. Inline CSS overrides all other stylings
    2. A specific selector (choosing a specific element as opposed to general element (i.e. class vs no class))
    3. Rules that appear later take precedence
    4. External CSS
    5. CSS with !important tag

3. CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
    A: A box that wraps around every html element.
    B: width and height of the content

4. float 속성은 왜 좋지 않을까요?
    A: When you move elements, other elements wrap around the shifted elemented. This could cause problems with difference aspect ratios and different browsers and your website might not look as intended

5. Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?
    A: Flex box is designed for layout in one dimension, either row or column
    B: Grid is designed for layout in two dimensions, both row and column

6. CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
    A: Commenting
    B: Spacing differently
    C: Create different sections for each type i.e. <body> <p> <h1> etc.
    D: Have utility CSS at the bottom
    E: OOCSS
    F: BEM (Block Element Modifier)
    G: Different Style Sheets
