import Modal from "../library/sumbiot/modules/modal/components/modal";

/**
 * Выподающие меню
 */
const burger = (burgerSelector: string, {
  modals = []
}: {modals?: Array<Modal>} ={}): void => {

  const $burger: HTMLElement = document.querySelector(burgerSelector)

  $burger.addEventListener("click", (e) => {

    modals.forEach(modal => modal.close())

    $burger.classList.toggle("aBurger--active")
  })

}

export default burger;
