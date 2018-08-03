if (module.hot) {
  __webpack_public_path__ = 'https://localhost:8888/'
  module.hot.accept()
}

import parameters from 'js/kintone/parameters'
import events from 'js/kintone/events'
import elements from 'js/kintone/elements'
import recordService from 'js/service/record-service'
import markdownService from 'js/service/markdown-service'

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

kintone.events.on('app.record.detail.show', (event) => {
  kintone.app.record.setGroupFieldOpen(parameters.fields.release_group, recordService.isRelease(event.record))
  recordService.openFamilyGroup(event.record)

  return event
})

kintone.events.on(events.detail.show, (event) => {
  if (recordService.isCategoryRelease(event.record)) {
    recordService.finishedRelease(event.record)
  }

  return event
})

kintone.events.on(events.detail.show, (event) => {
  const contentElement = elements.getField(parameters.fields.content)
  if (contentElement) {
    markdownService.replaceContent(contentElement, event.record)
  }
})

// For mobile
kintone.events.on(events.show, (event) => {
  const contentElements = document.getElementsByClassName('field-5520000')
  if (contentElements.length > 0) {
    const contentElement = contentElements[0].getElementsByClassName('control-value-gaia')[0]
    if (contentElement) {
      markdownService.replaceContent(contentElement, event.record)
    }
  }
})
