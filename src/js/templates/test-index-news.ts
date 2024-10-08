/**
 * Шаблон новости - для тестирования наблюдателя
 */
export function testNews(): string {

  return `
  <li class="aContent__item">
    <article class="aNews js-news">

      <header class="aNews__header">
        <div class="aNews__top-panel">

          <div class="aNews__author">
            <div class="aNews__author-inner">
              <div class="aNews__author-avatar">
                <img class="aNews__author-img" src="assets/img/photo.jpg" width="38" height="38" alt="">
              </div>
              <div class="aNews__author-info">
                <strong class="aNews__author-name">
                  <a href="">Кузнецов Николай</a>
                </strong>
                <time class="aNews__author-date">27.05.2024 16:30:22</time>
              </div>
            </div>
          </div><!--./aIdea__author-->

          <div class="aNews__status">
            <div class="aNews__rating">
              Рейтинг: <span>0</span>
            </div>
            <button class="aNews__status-like aBtn aBtn--icon" title="Нравиться"></button>
            <button class="aNews__status-bell aBtn aBtn--icon" title="Подписаться"></button>
          </div><!--./aIdea__status-->

        </div><!--./aIdea__top-panel-->
      </header><!--./aIdea__header-->

      <div class="aNews__content js-idea">

        <div class="aNews__body">

          <div class="aIdea aIdea--news">

            <h2 class="aIdea__title">
              <a href="">Идея: Организация движения автотранспорта внутри 82 цеха</a>
            </h2>

            <div class="aIdea__box">
              <p class="aIdea__value">
                <strong class="aIdea__label">Проблема:</strong>
                На данный момент оповещение полевых сотрудников происходит по средствам Outlook, группах в мессенджерах и лично, но оставляет за собой большой процент не уведомленных
                сотрудников, что в конечном итоге сказывается на качестве выполняемых работ
              </p>
            </div><!--./aIdea__box-->

            <hr>

            <div class="aIdea__box">
              <p class="aIdea__value">
                <strong class="aIdea__label">Решения:</strong>
                Предлагаю реализовать возможность SMS рассылки для уведомления сотрудников. В запускаемый сервис вводятся необходимые номера сотрудников и сообщение. Реализация данного
                решения сэкономит время сотрудника по договорной работе, а также руководителя проекта, позволит держать в курсе лиц
              </p>
            </div><!--./aIdea__box-->

            <hr>

            <div class="aIdea__grid aIdea__grid--news">
              <div class="aIdea__box">
                <strong class="aIdea__label">Автор идеи:</strong>
                <div>
                  <a class="aIdea__link" href="">Кузнецов Николай</a>
                </div>
              </div><!--./aIdea__box-->

              <div class="aIdea__box">
                <strong class="aIdea__label">Соавторы идеи:</strong>
                <div>
                  <a class="aIdea__link" href="">Кагарманов Ильдар</a>,
                  <a class="aIdea__link" href="">Арслангалин Вадим</a>
                </div>
              </div><!--./aIdea__box-->

              <div class="aIdea__box">
                <strong class="aIdea__label">Исполнители идеи:</strong>
                <div>
                  <a class="aIdea__link" href="">Кагарманов Ильдар</a>,
                  <a class="aIdea__link" href="">Арслангалин Вадим</a>
                </div>
              </div><!--./aIdea__box-->
            </div>

            <hr>

            <div class="aIdea__grid">
              <div class="aIdea__box">
                <strong class="aIdea__label aIdea__label--mb-0">Ожидаемый <span>экономический</span> эффект:</strong>
                <span class="aIdea__value">32 400 ₽</span>
              </div><!--./aIdea__box-->
              <div class="aIdea__box">
                <strong class="aIdea__label aIdea__label--mb-0">Стоимость идеи:</strong>
                <span class="aIdea__value">? ₽</span>
              </div><!--./aIdea__box-->
            </div>

          </div><!--./aIdea-->

        </div><!--./aNews__body-->

      </div><!--./aNews__content-->

      <footer class="aNews__footer">

        <section class="aNews__comments js-comments">
          <h3 class="visually-hidden">Комментарии</h3>

          <div class="aNews__comments-inner">

            <div class="aComment js-comment">

              <div class="aComment__avatar">
                <img class="aComment__img" src="assets/img/photo_1.png" width="38" height="38" alt="">
              </div>

              <article class="aComment__body">

                <header class="aComment__header">
                  <h4 class="aComment__author">
                    <a class="aComment__author-link" href="" target="_blank">Кагарманов Ильдар</a>
                  </h4>
                  <div class="aComment__like">
                    <div class="aComment__like-click active" title="Нравится"></div>
                    <div class="aComment__like-count">0</div>
                  </div>
                </header>

                <div class="aComment__content">
                  Комментарий от Ильдара
                </div>

                <footer class="aComment__footer">
                  <time class="aComment__date">27.05.2024 16:30:22</time>
                  <ul class="aComment__options">
                    <li class="aComment__item">
                      <a class="aComment__link" href="">Редактировать</a>
                    </li>
                    <li class="aComment__item">
                      <a class="aComment__link" href="">Удалить</a>
                    </li>
                  </ul>
                </footer>

              </article>
            </div><!--./comment-->

            <div class="aComment js-comment">

              <div class="aComment__avatar">
                <img class="aComment__img" src="assets/img/photo.jpg" width="38" height="38" alt="">
              </div>

              <article class="aComment__body">

                <header class="aComment__header">
                  <h4 class="aComment__author">
                    <a class="aComment__author-link" href="" target="_blank">Кузнецов Николай</a>
                    <time class="aComment__date">27.05.2024 16:30:22</time>
                  </h4>
                  <div class="aComment__like">
                    <div class="aComment__like-click" title="Нравится"></div>
                    <div class="aComment__like-count">0</div>
                  </div>
                </header>

                <div class="aComment__content">
                  Комментарий от Ильдара
                </div>

              </article>
            </div><!--./comment-->

          </div><!-- ./aNews__comments--inner-->

        </section><!--./aNews__comments-->

        <form class="aForm js-form-add-comment" method="POST">
          <div class="aForm__inner">

            <div class="aFrom__item">

              <div class="aNews__new-comment">
                <img class="aNews__new-comment-img" src="assets/img/photo_1.png" width="38" height="38" alt="">

                <div class="aNews__new-comment-inner">
                  <label>
                    <textarea class="aForm__textarea js-textarea-add-comment" type="text" name="new_commit" placeholder="Добавить комментарий" autocomplete="off"></textarea>
                  </label>
                  <button class="aNews__new-comment-btn aForm__button aBtn" type="submit">
                    Отправить
                  </button>
                  <button class="aNews__new-comment-btn aForm__button aBtn aBtn--icon js-reset-add-comment" type="reset">
                    Отменить
                  </button>
                </div>
              </div><!--./aComment__new-->

            </div>

          </div>
        </form><!--./aForm-->

      </footer>

    </article><!--./aNews-->
  </li><!--./aContent__item-->
  `
}


