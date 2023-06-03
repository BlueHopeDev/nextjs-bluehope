import EditorArea from "@/components/EditorArea"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Create'
}

export default function Write() {

  return (
    <main className="m-[16px]">
      <EditorArea id="editor-area" defaultHeight={240}/>
    </main>
  )
}
