/**
 *  Шаблон предыдущие комментарии
 * */
export function unwrapCommentsTemplate(count: number): string {

  return `
    <div class="aNews__unwrap-comments">
      <button class="js-unwrap-comments">Предыдущие комментарии (<span>${count}</span>)</button>
    </div><!-- ./aNews__unwrap-comments-->
  `
}
