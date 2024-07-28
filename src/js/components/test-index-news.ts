import Component from "../core/component";

import {testNews} from "../templates/test-index-news";

/**
 * Добавить новости - для тестирования наблюдателя
 */
export default class TestIndexNews extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   * @param {Array=} [options.partners] - партнерские компоненты, которые помогают этому
   */
  constructor(id: any ,options: any = {}) {

    super(id,options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  init() {
    this.getData()

    return this
  }

  async getData() {

    try {

      const html = []

      for (let i = 0; i < 10; i++) {

        html.push(testNews())

      }

      this.$el.innerHTML = '';
      this.$el.insertAdjacentHTML('afterbegin', html.join(''))

    } catch (error: any) {

      console.group('In file TestIndexNews, in function getData error')
        console.error(`${error.stack}`)
      console.groupEnd();

    } finally {

    }

  }

}
