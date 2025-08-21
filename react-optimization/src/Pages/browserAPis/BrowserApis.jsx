import React from 'react'
import DomApi from './apis/DomApi'
import WindowApi from './apis/WindowApi'
import LocalStorageDemo from './apis/LocalStorageDemo'
import FetchUsers from './apis/FetchAPi'
import ClipboardApi from './apis/ClipboardApi'
import GeoLocation from './apis/GeolocationApi'
import NotifyUser from './apis/NotificationAPI'
import CanvasExample from './apis/CanvasApi'
import BatteryStatus from './apis/BatteryStatusApi'
import FullscreenDemo from './apis/FullScreenApi'
import SpeechDemo from './apis/SpeechSynthesisApi'
import VisibilityExample from './apis/PageVisibilityApi'
import DownloadFile from './apis/DownloadFile'
import SessionStorageExample from './apis/SessionStorege'

const BrowserApis = () => {
  return (
    <div>
      <DomApi/>
      <WindowApi/>
      <LocalStorageDemo/>
      {/* <FetchUsers/> */}
      <ClipboardApi/>
      <GeoLocation/>
      <NotifyUser/>
      <CanvasExample/>
      <BatteryStatus/>
      <FullscreenDemo/>
      <SpeechDemo/>
      <VisibilityExample/>
      <DownloadFile/>
      <SessionStorageExample/>
    </div>
  )
}

export default BrowserApis
