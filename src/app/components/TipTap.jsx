'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = ({ value, onChangeInput }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: value ?? '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'rounded-2xl border h-[150px] border-input bg-gray-500 p-2',
      },
    },
    onUpdate: ({ editor }) => {
      console.log('hiii :', editor.getHTML())
    },
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
