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

  const modifyText = (command: string, defaultUi: boolean, value: string | undefined) => {
    if (command === 'superscript' || command === 'subscript') {
      var selection = window.getSelection();
      if (selection) {
        var range = selection.getRangeAt(0);
        var span = document.createElement('span');
        
        if (command === 'superscript') {
          span.style.verticalAlign = 'super';
        } else if (command === 'subscript') {
          span.style.verticalAlign = 'sub';
        }
        
        range.surroundContents(span);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      document.execCommand(command, false, undefined);
    }
  }

  const handleOptionClick = (option: string) => {
    modifyText(option, false, undefined)
  }

  return (
    <section className="flex flex-col gap-[16px]">
    <section id="editor-menu" className="flex flex-auto items-center gap-[20px] bg-dark-500/5 rounded-sm p-[10px] backdrop-blur-sm">
      <section id="text" className="flex flex-auto gap-[5px] w-max max-w-max">
        <button onClick={() => handleOptionClick('bold')} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiBold/>
        </button>
        <button onClick={() => handleOptionClick('italic')} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiItalic/>
        </button>
        <button onClick={() => handleOptionClick('underline')} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiUnderline/>
        </button>
        <button onClick={() => handleOptionClick('strikethrough')} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiStrikethrough/>
        </button>
        <button onClick={() => handleOptionClick('superscript')} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiSuperscript/>
        </button>
        <button onClick={() => handleOptionClick('subscript')} className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiSubscript/>
        </button>
        <button className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiLink/>
        </button>
      </section>
      <section id="align" className="flex flex-auto gap-[5px] w-max">
        <button className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignLeft/>
        </button>
        <button className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignCenter/>
        </button>
        <button className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignRight/>
        </button>
        <button className="bg-dark-500/0 hover:bg-dark-500/5 rounded-sm p-[8px] transition-all duration-300 ease-in-out">
          <RiAlignJustify/>
        </button>
      </section>
    </section>
    <div contentEditable={true} className='w-full bg-light-400/80 p-[16px] outline-none resize-none overflow-hidden'></div>
    {/* <textarea
      id={id}
      ref={textareaRef}
      value={content}
      onChange={autoHeight}
      className="w-full bg-light-400/80 p-[16px] outline-none resize-none overflow-hidden"
      {...props}
    />
    <div dangerouslySetInnerHTML={{ __html: content }}/> */}
  </section>

  )
}

export default EditorArea
