'use client'
import React, { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react'
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiSuperscript,
  RiSubscript,
  RiListOrdered,
  RiListUnordered,
  RiLink,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
  RiAlignJustify,
} from 'react-icons/ri'

interface EditorAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  defaultHeight?: number
}

const EditorArea: React.FC<EditorAreaProps> = ({ id, defaultHeight, ...props }) => {

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [content, setContent] = useState('')
  const [height, setHeight] = useState<number | undefined>(defaultHeight)

  const autoHeight = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (textarea) {
      if (defaultHeight !== undefined && textarea.scrollHeight > defaultHeight) {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
        setHeight(textarea.scrollHeight)
      } else if (defaultHeight === undefined) {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
        setHeight(textarea.scrollHeight)
      }
    }

    const { value } = event.target;

    const strippedContent = value.replace(/(<([^>]+)>)/gi, '');
  
    setContent(strippedContent)
  }

  useEffect(() => {
    if (textareaRef.current && height && defaultHeight && height < defaultHeight) {
      textareaRef.current.style.height = `${defaultHeight}px`
    } else if (textareaRef.current && height) {
      textareaRef.current.style.height = `${height}px`
    }
  }, [height, defaultHeight])

  const handleBoldClick = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;
    
      const selectedText = content.slice(selectionStart, selectionEnd);
      const formattedText = `<b>${selectedText}</b>`;
    
      const newContent =
        content.slice(0, selectionStart) +
        formattedText +
        content.slice(selectionEnd);
    
      setContent(newContent);
    
      textarea.setSelectionRange(
        selectionStart,
        selectionStart + formattedText.length
      )

      textarea.focus()
    }
  }

  const handleItalicClick = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;
    
      const selectedText = content.slice(selectionStart, selectionEnd);
      const formattedText = `<em>${selectedText}</em>`;
    
      const newContent =
        content.slice(0, selectionStart) +
        formattedText +
        content.slice(selectionEnd);
    
      setContent(newContent);
    
      textarea.setSelectionRange(
        selectionStart,
        selectionStart + formattedText.length
      )

      textarea.focus()
    }
  }

  return (
    <section className="flex flex-col gap-[16px]">
    <section id="editor-menu" className="flex flex-auto items-center gap-[20px] bg-dark-500/5 rounded-sm p-[10px] backdrop-blur-sm">
      <section id="text" className="flex flex-auto gap-[5px] w-max max-w-max">
        <span onClick={handleBoldClick} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiBold/>
        </span>
        <span onClick={handleItalicClick} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiItalic/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiUnderline/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiStrikethrough/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiSuperscript/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiSubscript/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiLink/>
        </span>
      </section>
      <section id="align" className="flex flex-auto gap-[5px] w-max">
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignLeft/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignCenter/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignRight/>
        </span>
        <span className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignJustify/>
        </span>
      </section>
    </section>
    <textarea
      id={id}
      ref={textareaRef}
      value={content}
      onChange={autoHeight}
      className="w-full bg-light-400/80 p-[16px] outline-none resize-none overflow-hidden"
      {...props}
    />
    <div dangerouslySetInnerHTML={{ __html: content }}/>
  </section>

  )
}

export default EditorArea
