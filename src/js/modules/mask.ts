import $ from "jquery";
import 'jquery.maskedinput/src/jquery.maskedinput'

/**
 * Настройки масок
 */
const mask = () => {

  // маска для даты
  $(".js-input").mask('99.99.9999')

}

export default mask;
