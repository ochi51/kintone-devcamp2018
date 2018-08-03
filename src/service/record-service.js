import parameters from 'js/kintone/parameters'

const service = {
  isRelease: (record) => {
    return service.isCategoryRelease(record) || service.isChildRelease(record)
  },
  isCategoryRelease: (record) => {
    return record[parameters.fields.category].value === 'リリース'
  },
  isChildRelease: (record) => {
    return record[parameters.fields.release_id].value > 0
  },
  openFamilyGroup: (record) => {
    if (service.isParent(record)) {
      kintone.app.record.setGroupFieldOpen(parameters.fields.family_group, true)
    } else {
      service.openFamilyGroupHasChild(record)
    }
  },
  isParent: (record) => {
    return record[parameters.fields.parent_id].value > 0
  },
  openFamilyGroupHasChild: (record) => {
    const parentIdCode = parameters.fields.parent_id
    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
      fields: ['$id'],
      app: kintone.app.getId(),
      query: parentIdCode + ' = ' + record.$id.value + ' limit 1'
    }).then((res) => {
      kintone.app.record.setGroupFieldOpen(parameters.fields.family_group, res.records.length > 0)
    }).catch((e) => {
      console.log(e)
    })
  },
  finishedRelease: (record) => {
    const releaseIdCode = parameters.fields.release_id
    const statusCode = parameters.fields.status
    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', {
      fields: ['$id'],
      app: kintone.app.getId(),
      query: releaseIdCode + ' = ' + record.$id.value + ' and ' + statusCode + ' in ("リリース待ち")'
    }).then((res) => {
      let records = []
      res.records.forEach(r => {
        let data = {}
        data[statusCode] = {value: '完了'}
        records.push({id: r.$id.value, record: data})
      })
      if (records.length > 0) {
        kintone.api(kintone.api.url('/k/v1/records', true), 'PUT', {
          app: kintone.app.getId(),
          records: records
        }).then((res) => {
          location.reload()
        }).catch((e) => {
          console.log(e)
        })
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}

export default service
