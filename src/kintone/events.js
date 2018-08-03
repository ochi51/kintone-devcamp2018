// 一覧
// - レコード一覧画面の表示後イベント
//  - app.record.index.show
//  - mobile.app.record.index.show
//
// - レコード一覧画面のインライン編集の保存実行前イベント
//  - app.record.index.edit.submit
//
// - レコード一覧画面のインライン編集の保存成功後イベント
//  - app.record.index.edit.submit.success
//
// - レコード一覧画面のインライン編集開始時イベント
//  - app.record.index.edit.show
//
// - レコード一覧画面のフィールド値変更時イベント
//  - app.record.index.edit.change.<フィールドコード>
//
// - レコード一覧画面のレコード削除前イベント
//  - app.record.index.delete.submit
//
// レコード詳細
// - レコード詳細画面が表示された時のイベント
//  - app.record.detail.show
//  - mobile.app.record.detail.show
//
// - レコード詳細画面の削除前イベント
//  - app.record.detail.delete.submit
//
// レコード追加
// - レコード追加画面が表示された時のイベント
//  - app.record.create.show
//  - mobile.app.record.create.show
//
// - レコード追加画面の保存実行前イベント
//  - app.record.create.submit
//  - mobile.app.record.create.submit
//
// - レコード追加画面の保存成功後イベント
//  - app.record.create.submit.success
//
// - レコード追加画面のフィールド値変更時イベント
//  - app.record.create.change.<フィールドコード>
//  - mobile.app.record.create.change.<フィールドコード>
//
// レコード編集
// - レコード編集画面が表示された時のイベント
//  - app.record.edit.show
//  - mobile.app.record.edit.show
//
// - レコード編集画面の保存実行前イベント
//  - app.record.edit.submit
//  - mobile.app.record.edit.submit
//
// - レコード編集画面の保存成功後イベント
//  - app.record.edit.submit.success
//
// - レコード編集画面のフィールド値変更時イベント
//  - app.record.edit.change.<フィールドコード>
//  - mobile.app.record.edit.change.<フィールドコード>
//
// レコード印刷
// - レコード印刷画面が表示された時のイベント
//  - app.record.print.show
//
// グラフ表示
// - グラフが表示された時のイベント
//  - app.report.show

export default {
  show: [
    'app.record.index.show',
    'mobile.app.record.index.show',
    'app.record.detail.show',
    'mobile.app.record.detail.show'
  ],
  index: {
    show: [
      'app.record.index.show',
      'mobile.app.record.index.show'
    ],
    edit: [
      'app.record.index.edit.show'
    ]
  },
  detail: {
    show: [
      'app.record.detail.show',
      'mobile.app.record.detail.show'
    ]
  },
  create: {
    submit: [
      'app.record.create.submit',
      'mobile.app.record.create.submit'
    ],
    success: [
      'app.record.create.submit.success'
    ]
  },
  edit: {
    submit: [
      'app.record.edit.submit',
      'mobile.app.record.edit.submit'
    ],
    success: [
      'app.record.index.edit.submit.success',
      'app.record.edit.submit.success'
    ]
  },
  delete: {
    submit: [
      'app.record.index.delete.submit',
      'app.record.detail.delete.submit'
    ]
  },
  create_and_edit: {
    submit: [
      'app.record.create.submit',
      'mobile.app.record.create.submit',
      'app.record.edit.submit',
      'mobile.app.record.edit.submit'
    ],
    success: [
      'app.record.index.edit.submit.success',
      'app.record.create.submit.success',
      'app.record.edit.submit.success'
    ]
  },
  submit: [
    'app.record.index.edit.submit',
    'app.record.index.delete.submit',
    'app.record.detail.delete.submit',
    'app.record.create.submit',
    'mobile.app.record.create.submit',
    'app.record.edit.submit',
    'mobile.app.record.edit.submit'
  ],
  success: [
    'app.record.index.edit.submit.success',
    'app.record.create.submit.success',
    'app.record.edit.submit.success'
  ],
  print: {
    show: [
      'app.record.print.show'
    ]
  },
  report: {
    show: [
      'app.report.show'
    ]
  }
}
