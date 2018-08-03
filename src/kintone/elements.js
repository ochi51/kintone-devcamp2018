const elements = {
  getField: (code) => {
    return kintone.app.record.getFieldElement(code)
  },
  getIndexHeaderMenuSpace: () => {
    const mobileElement = kintone.mobile.app.getHeaderSpaceElement()
    if (mobileElement) {
      return mobileElement
    }
    return kintone.app.getHeaderMenuSpaceElement()
  },
  getDetailHeaderMenuSpace: () => {
    const mobileElement = kintone.mobile.app.getHeaderSpaceElement()
    if (mobileElement) {
      return mobileElement
    }
    return kintone.app.record.getHeaderMenuSpaceElement()
  },
  getHeaderMenuSpace: () => {
    const indexElement = elements.getIndexHeaderMenuSpace()
    if (indexElement) {
      return indexElement
    }
    return elements.getDetailHeaderMenuSpace()
  }
}

export default elements
