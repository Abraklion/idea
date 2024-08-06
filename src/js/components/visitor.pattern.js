import Support from '../core/functions'

/**
 *  Добавляет новую функциональность уже существующим классам, не изменяя исходный код класса
 * */
export default class VisitorPattern {

  /**
   * Посититель для экземпляра модального окна (поиска) которое реализует
   * закрытия выподающего меню
   * @param {Object} instanceClass - экземпляр класса
   * @return {void}
   */
  static modalSearchMod(instanceClass) {

    instanceClass.upgrade = function () {

      document.querySelector('.aBody').addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.matches(this._trigger) || target && target.parentElement?.matches(this._trigger)) {

          document.querySelector('.aBurger--active')?.classList.remove('aBurger--active')

        }
      },true)

      return this
    }

  }

}
