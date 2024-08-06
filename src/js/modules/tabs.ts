const tabs = (parentSelector: string, tabSelector: string, contentSelector: string, activeClass: string, display='block') => {

  /**
   *
   * МОДУЛЬ ДЛЯ РАБОТЫ С ТАБАМИ
   *
   * parentSelector    -> родитель табов
   * tabSelector       -> селектор пункта меню табов
   * contentSelector   -> селектор описание табов
   * activeClass       -> класс активности
   *
   */

  document.querySelector('.aBody').addEventListener('click', (e: MouseEvent): void => {
    const target : HTMLElement = e.target as HTMLElement;

    if(target && target.classList.contains(tabSelector.replace(/\./, "")) || target && target.parentElement?.classList.contains(tabSelector.replace(/\./, ""))) {

        // активируем таб
        tabInit(target)
    }

  })

  function tabInit(target: HTMLElement) : void {
    const tabParent : HTMLElement = target.closest(parentSelector);

    const tab : NodeListOf<HTMLElement> = tabParent.querySelectorAll(tabSelector),
          content: NodeListOf<HTMLElement> = tabParent.querySelectorAll(contentSelector);


    tab.forEach((item: HTMLElement, i: number): void => {
      if (target === item || target.parentNode === item) {
        hideTabContent(tab, content);
        showTabContent(tab, content, i);
      }
    })
  }

  function hideTabContent(tab: NodeListOf<HTMLElement>, content: NodeListOf<HTMLElement>) : void {
    content.forEach((item: HTMLElement) : void => {
      item.classList.add('animated', 'fadeIn');
      item.style.display = 'none';
    });

    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(tab: NodeListOf<HTMLElement>, content: NodeListOf<HTMLElement>,i: number = 0): void {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }

};

export default tabs;
