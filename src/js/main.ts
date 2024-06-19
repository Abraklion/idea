import Modal from "./library/sumbiot/modules/modal/components/modal";

import tabs from "./modules/tabs";

console.log('1')

window.addEventListener('DOMContentLoaded', () => {

  console.log('2')

  // модалка поиск
  const searchModal : Modal = new Modal('.js-search-modal', '#modal-search').init()

  // модалка фильтр
  const filterModal : Modal = new Modal('.js-filter-modal', '#modal-filter').init()

  // табы для идей
  tabs('.aTabs', '.aBtn--tab', '.aTabs__content', 'active')

})
