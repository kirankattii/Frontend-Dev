import React from 'react'
import OnclickEvent from './events/OnclickEvent'
import OnMouseEnterLeave from './events/onMouseEnterLeave'
import FormEvents from './events/FormEvents'
import KeyboardEvents from './events/KeyboardEvents'
import FocusEvent from './events/FocusEvent'
import ClipBoardEvent from './events/ClipBoardEvents'
import SelectExample from './events/SelectExample'
import DragDropExample from './events/DragAndDropEvent'
import MediaEvents from './events/MediaEvents'
import UsernameCheck from './events/ApiCallEvent'
import CompositionExample from './events/CompositionEvent'
import OnDoubleCickEvent from './events/OnDoubleCickEvent'

const EventsInJs = () => {
  return (
    <div>
      <OnclickEvent/>
      <OnMouseEnterLeave/>
      <FormEvents/>
      <KeyboardEvents/>
      <FocusEvent/>
      <ClipBoardEvent/>
      <SelectExample/>
      <DragDropExample/>
      <MediaEvents/>
      <UsernameCheck/>
      <CompositionExample/>
      <OnDoubleCickEvent/>
    </div>
  )
}

export default EventsInJs
