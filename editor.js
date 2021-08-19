import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { EXAMPLE } from "@codemirror/lang-EXAMPLE"

let editor = new EditorView({
  state: EditorState.create({
    extensions: [
      basicSetup,
      EXAMPLE(),
    ]
  }),
  parent: document.body
})

