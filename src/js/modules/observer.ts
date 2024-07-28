import {unwrapTemplate} from "../templates/unwrapTemplate";
import {unwrapCommentsTemplate} from "../templates/unwrapCommentsTemplate";

/**
 * Наблюдатель
 */
const observer = (selector: string): void => {

  const observer = new MutationObserver((mutationRecords: MutationRecord[]): void => {

    mutationRecords.forEach((mutation: MutationRecord): void => {

      switch (mutation.type) {
        case "childList":

          // отслеживаем только новые
          for(let element of mutation.addedNodes) {
            // текстовые пропускаем
            if (!(element instanceof HTMLElement)) continue

            // элементы с без класса "aContent__item" пропускаем
            if(!element.classList.contains('aContent__item')) continue

            // рендер развернуть новость
            const $idea: HTMLElement = element.querySelector('.js-idea')

            if($idea.scrollHeight > 480) {
              $idea.insertAdjacentHTML('beforeend', unwrapTemplate())
            }

            // рендер развернуть комментарии
            const $commentsWrapper: HTMLElement = element.querySelector('.js-comments'),
              $comments: NodeListOf<HTMLElement> = $commentsWrapper.querySelectorAll('.js-comment')

            if($comments.length > 2) {
              $comments[1].classList.add('aComment--after')

              for (let i = 2; i < $comments.length; i++) {
                $comments[i].style.display = 'none'
              }

              $commentsWrapper.insertAdjacentHTML('beforeend', unwrapCommentsTemplate($comments.length - 2))
            }
          }

        break;
      }

    })
  })

  // настраиваем и запускаем наблюдатель
  observer.observe(document.querySelector(selector), {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
  });

  // делегирование
  document.addEventListener('click', (e: MouseEvent): void => {
    const target: HTMLElement = e.target as HTMLElement;

    // разворачиваем новость
    if(target && target.classList.contains('js-unwrap-idea')) {
      const $idea: HTMLElement = target.closest('.js-idea') as HTMLElement;

      $idea.style.maxHeight = '100%'

      target.parentElement.remove()
    }

    // скрыть комментарии
    if(target && target.classList.contains('js-comments-hide')) {
      e.preventDefault()

      const $showComments: NodeListOf<HTMLElement> = target.closest('.js-comments').querySelectorAll('.js-comment')

      for (let i = 0; i < $showComments.length; i++) {
        $showComments[i].style.display = 'none'
      }

      target.innerHTML = `Предыдущие комментарии (<span></span>)`
      target.classList.remove('js-comments-hide')
    }

    // разворачиваем комментарии
    if(target && target.classList.contains('js-unwrap-comments')) {
      e.preventDefault()

      const $commentsWrapper: HTMLElement = target.closest('.js-comments').querySelector('.aNews__comments-inner'),
        $hideComments: NodeListOf<HTMLElement> = $commentsWrapper.querySelectorAll('[style*="none"]')


      $commentsWrapper.querySelector('.aComment--after')?.classList.remove('aComment--after')

      if($hideComments.length > 2) {

        for (let i = 0; i < 2; i++) {
          $hideComments[i].style.display = 'flex'
        }

        $hideComments[1].classList.add('aComment--after')

        target.querySelector('span').innerHTML = `${$hideComments.length - 2}`

      } else {

        for (let i = 0; i < $hideComments.length; i++) {
          $hideComments[i].style.display = 'flex'
        }

        target.innerHTML = `Скрыть комментарии`
        target.classList.add('js-comments-hide')
      }

    }

  })

}

export default observer;
