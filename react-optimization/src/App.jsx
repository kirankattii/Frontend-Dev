import React from "react";
import Pagination from "./Pages/pagination/Pagination";
import InfiniteScroll from "./Pages/infinite-scroll/InfiniteScroll";
import { DebouncedInput } from "./Pages/DebouncingThrottling/Debouncing";
import { DebouncingSearchApi } from "./Pages/TenDebouncingExamples/ApiSearchinput";
import ResizeComponent from "./Pages/TenDebouncingExamples/WindowResizeEvent";
import ButtonClick from "./Pages/TenDebouncingExamples/ButtonClick";
import PickColor from "./Pages/TenDebouncingExamples/PickColor";
import ProductFilter from "./Pages/TenDebouncingExamples/ProductFilter";
import SearchWithPagination from "./Pages/TenDebouncingExamples/SearchWithPagination";
import ChartControl from "./Pages/TenDebouncingExamples/ChartControll";
import FormSubmitValidation from "./Pages/TenDebouncingExamples/FormSubmitValidation";
import ChatTyping from "./Pages/TenDebouncingExamples/TypingIndicator";
import TagSearch from "./Pages/TenDebouncingExamples/TagSearch";
import ThrottleSearch from "./Pages/tenThrottlingExamples/ThrottleSearch";
import ResizeThrottle from "./Pages/tenThrottlingExamples/ResizeThrottle";
import ScrollThrottle from "./Pages/tenThrottlingExamples/ScrollThrottle";
import MouseThrottle from "./Pages/tenThrottlingExamples/MouseThrottle";
import ThrottleButton from "./Pages/tenThrottlingExamples/ThrottleButton";
import EventsInJs from "./Pages/JSEvents/EventsInJs";
import DomApi from "./Pages/browserAPis/apis/DomApi";
import BrowserApis from "./Pages/browserAPis/BrowserApis";
import UseRefHook from "./Pages/useRefHook/UseRefHook";
import UseEffectHook from "./Pages/useEffectHook/UseEffectHook";
import UseMemoHook from "./Pages/useMemoHook/UseMemoHook";
import EffectVsLayoutDemo from "./Pages/others/EffectVsLayoutDemo";

const App = () => {
  return (
    <div>
      {/* <Pagination/> */}
      {/* <InfiniteScroll/> */}
      {/* <DebouncedSearch/> */}
      {/* <DebouncedInput/> */}
      {/* <DebouncingSearchApi/> */}
      {/* <ResizeComponent/> */}
      {/* <ButtonClick/> */}
      {/* <PickColor/> */}
      {/* <ProductFilter/> */}
      {/* <SearchWithPagination/> */}
      {/* <InfiniteScroll/> */}
      {/* <ChartControl/> */}
      {/* <FormSubmitValidation/> */}
      {/* <ChatTyping/> */}
      {/* <TagSearch/> */}

      {/* Throtalling search */}
      {/* <ThrottleSearch/> */}
      {/* <ResizeThrottle/> */}
      {/* <ScrollThrottle/> */}
      {/* <MouseThrottle/> */}
      {/* <ThrottleButton /> */}

      {/* Events in javascript */}
      {/* <EventsInJs/> */}

      {/* {BrowserApis} */}
      {/* <BrowserApis/> */}

      {/* UseRef Hook */}
      {/* <UseRefHook/> */}

      {/* useEffect Hook */}
      {/* <UseEffectHook/> */}

      {/* UseMemo Hook */}
      {/* <UseMemoHook/> */}

      {/* useEffect and useLayout hooks */}
      <EffectVsLayoutDemo/>

    </div>
  );
};

export default App;
