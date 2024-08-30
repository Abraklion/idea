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
            const $idea: HTMLElement = element.querySelector('.aNews__content')

            if($idea.scrollHeight > 199) {
              $idea.insertAdjacentHTML('beforeend', unwrapTemplate())
            }

            // рендер развернуть комментарии
            const $commentsWrapper: HTMLElement = element.querySelector('.js-comments'),
              $comments: NodeListOf<HTMLElement> = $commentsWrapper.querySelectorAll('.js-comment')

            if($comments.length > 1) {

              $comments[$comments.length - 1].classList.add('aComment--after')

              for (let i = 0; i < $comments.length - 1; i++) {
                $comments[i].style.display = 'none'
              }

              $commentsWrapper.insertAdjacentHTML('afterbegin', unwrapCommentsTemplate($comments.length - 1))
            }

            // рендер видео новости
            const $video: NodeListOf<HTMLElement> = element.querySelectorAll('oembed[url]')

            $video.forEach(video => {
              const anchor = document.createElement( 'a' )

              anchor.setAttribute( 'href', video.getAttribute( 'url' ) )
              anchor.className = 'embedly-card'

              video.appendChild( anchor )
            })
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
  document.querySelector('.aBody').addEventListener('click', (e: MouseEvent): void => {
    const target: HTMLElement = e.target as HTMLElement;

    // разворачиваем новость
    if(target && target.classList.contains('js-unwrap-idea')) {
      const $idea: HTMLElement = target.closest('.aNews__content') as HTMLElement,
            $unwrap: HTMLElement = target.closest('.aUnwrap')

      if(!$unwrap.classList.contains('active')) {
        $unwrap.classList.add('active')

        $idea.style.maxHeight = $idea.scrollHeight + 10 + 'px'
      } else {
        $unwrap.classList.remove('active')

        $idea.style.maxHeight = '199px'
      }
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
        $hideComments: NodeListOf<HTMLElement> = $commentsWrapper.querySelectorAll('[style*="none"]'),
        $allComments: NodeListOf<HTMLElement> = $commentsWrapper.querySelectorAll('.js-comment')

      $commentsWrapper.querySelector('.aComment--after')?.classList.remove('aComment--after')

      if($hideComments.length === $allComments.length) {

        $hideComments[$hideComments.length - 1].style.display = 'flex'

        $hideComments[$hideComments.length - 1].classList.add('aComment--after')

        target.querySelector('span').innerHTML = `${$hideComments.length - 1}`

      } else if ($hideComments.length > 2) {

        for (let i = $hideComments.length - 1; i > $hideComments.length - 3; i--) {
          $hideComments[i].style.display = 'flex'
        }

        $hideComments[$hideComments.length - 2].classList.add('aComment--after')

        target.querySelector('span').innerHTML = `${$hideComments.length - 2}`

      } else {

        for (let i = 0; i < $hideComments.length; i++) {
          $hideComments[i].style.display = 'flex'
        }

        target.innerHTML = `Скрыть комментарии`
        target.classList.add('js-comments-hide')
      }

    }

    // разворачиваем добавить комментарий
    if(target && target.classList.contains('js-textarea-add-comment')) {

      target.closest('.aNews__new-comment-inner').classList.add('active')
    }

    // сварачиваем добавить комментарий
    if(target && target.classList.contains('js-reset-add-comment')) {

      target.closest('.aNews__new-comment-inner').classList.remove('active');

      (target.closest('.js-form-add-comment') as HTMLFormElement).reset()
    }

  })

}

export default observer;
