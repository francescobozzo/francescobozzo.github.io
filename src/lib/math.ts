/**
 * Detect whether a body contains LaTeX math that remark-math/rehype-katex
 * will render. Math uses `$...$` inline and `$$...$$` block delimiters.
 * Liberal check: any `$` presence means KaTeX CSS may be needed.
 */
export function containsMath(body: string): boolean {
  return /\$/.test(body);
}
