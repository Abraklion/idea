import $ from 'jquery'

import Modal from "./library/sumbiot/modules/modal/components/modal";

import date from "./modules/date";
import mask from "./modules/mask";
import select2 from "./modules/select2-news";
import burger from "./modules/burger";
import observer from "./modules/observer";

import VisitorPattern from "./components/visitor.pattern";


$(document).ready(function(){

  // модалка поиск
  const searchModal : Modal = new Modal('.js-search-modal', '#modal-search').init()
    .accept(VisitorPattern.modalSearchMod).upgrade();

  // выподающие меню (бургер)
  burger('.aBurger', {modals: [searchModal]})

  // работа с датой и временем
  date()

  // маски
  mask()

  // Кастомный выпадающий список
  select2()

  // Кастомный выпадающий список
  observer('.js-observer')

})
