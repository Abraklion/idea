/**
 *  Шаблон предыдущие комментарии
 * */
export function unwrapCommentsTemplate(count: number): string {

  return `
    <div class="aNews__unwrap-comments">
      <a class="js-unwrap-comments" href="">Предыдущие комментарии (<span>${count}</span>)</a>
    </div><!-- ./aNews__unwrap-comments-->
  `
}
