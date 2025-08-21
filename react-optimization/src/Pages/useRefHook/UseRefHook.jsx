import React from 'react'
import FocusInput from './useRefHooks/FocusInput'
import AutoFocus from './useRefHooks/AutoFocus'
import PreviousValue from './useRefHooks/PreviousValue'
import ClickOutsideDropdown from './useRefHooks/ClickOutsideDropdown'
import Stopwatch from './useRefHooks/Stopwatch'
import AnimateBox from './useRefHooks/AnimateBox'
import ChatScroll from './useRefHooks/ChartScroll'
import MeasureWidth from './useRefHooks/MeasureWidth'
import MouseTracker from './useRefHooks/MouseTracker'
import VideoControl from './useRefHooks/VideoControl'
import InputMask from './useRefHooks/InputMask'

const UseRefHook = () => {
  return (
    <div>
      <FocusInput/>
      <AutoFocus/>
      <PreviousValue/>
      <ClickOutsideDropdown/>
      <Stopwatch/>
      <AnimateBox/>
      <ChatScroll/>
      <MeasureWidth/>
      {/* <MouseTracker/> */}
      <VideoControl/>
      <InputMask/>
      
    </div>
  )
}

export default UseRefHook
