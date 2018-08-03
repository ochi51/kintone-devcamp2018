import 'github-markdown-css'
import parser from 'marked'
import parameters from 'js/kintone/parameters'

export default {
  replaceContent: (contentElement, record) => {
    const content = record[parameters.fields.content].value
    contentElement.innerHTML = '<article class="markdown-body">' + parser(content) + '</article class="markdown-body">'
  }
}
