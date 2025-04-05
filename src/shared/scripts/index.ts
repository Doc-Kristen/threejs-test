import { initScaling } from '@scripts/modules/scaling'
import { initScene } from './modules/threejs/init-scene'


document.addEventListener(
  'DOMContentLoaded',
  () => {
    initScaling()
    initScene()
    // initModals()
    // let accordions = new Accordions()
    // accordions.init()
  },
  true
)
