import $ from "jquery";
import 'jquery-ui/ui/widgets/datepicker'

/**
 * Настройки даты и времени
 */
const date = () => {

  function datepicker() {
    $.datepicker.regional['ru'] = {
      closeText: 'Закрыть',
      prevText: 'Предыдущий',
      nextText: 'Следующий',
      currentText: 'Сегодня',
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: '',

    };

    $.datepicker.setDefaults($.datepicker.regional['ru']);


    const $datepicker: JQuery<HTMLElement> = $(".js-datepicker")

    // инициализация
    $datepicker.datepicker({
      onSelect: function(date){
        $(this).children( 'input').first().val(date)
        $(this).find('.ui-datepicker-inline').hide()
      }
    });

    const $calendar: JQuery<HTMLElement> = $('.ui-datepicker-inline')

    // скрываем календари
    $calendar.hide()

    // показ календаря при клике на input
    $datepicker.on("click", function(){
      $calendar.hide()
      $(this).find('.ui-datepicker-inline').show()
    })

    // скрываем календарь если клюкнули не на него
    document.querySelector('.aBody').addEventListener('click', function(e: MouseEvent){
      const target: HTMLElement = e.target as HTMLElement;

      if(!(target && target.closest('.ui-datepicker-inline')
          || target && target.closest('.js-input')
          || target && target.closest('.ui-corner-all'))){
        $calendar.hide()
      }
    })

    // скрываем календарь по нажатию Esc
    document.querySelector('.aBody').addEventListener("keydown", (e: KeyboardEvent) => {

      if(e.key === "Escape" || e.keyCode === 27) {
        $calendar.hide()
      }

    })

  }

  datepicker()
}

export default date;
