import $ from 'jquery'

import Modal from "./library/sumbiot/modules/modal/components/modal";

import tabs from "./modules/tabs";
import date from "./modules/date";
import mask from "./modules/mask";
import select2 from "./modules/select2";


$(document).ready(function(){

  // модалка поиск
  const searchModal : Modal = new Modal('.js-search-modal', '#modal-search').init()

  // модалка фильтр
  const filterModal : Modal = new Modal('.js-filter-modal', '#modal-filter').init()


  // табы для идей
  tabs('.aTabs', '.aBtn--tab', '.aTabs__content', 'active')

  // работа с датой и временем
  date()

  // маски
  mask()

  // Кастомный выпадающий список
  select2()

})
