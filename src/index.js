if (module.hot) {
  __webpack_public_path__ = 'https://localhost:8888/'
  module.hot.accept()
}
import events from 'js/kintone/events'
import elements from 'js/kintone/elements'
import mithuki from './images/mithuki.jpg'

kintone.events.on(events.show, (event) => {
  const element = elements.getHeaderMenuSpace()
  if (element) {
    const pcIndexElement = kintone.app.getHeaderMenuSpaceElement()
    if (pcIndexElement) {
      element.innerHTML = '<img src="' + mithuki + '" height="100%" />'
    } else {
      element.innerHTML = '<img src="' + mithuki + '" width="100%" height="100%" />'
    }
  }
})
