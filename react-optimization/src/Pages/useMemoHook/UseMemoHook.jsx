import React from "react";
import WithourReactMemo from "./ReactUseMemo/1Counter/WithourReactMemo";
import WithReactMemo from "./ReactUseMemo/1Counter/WithReactMemo";
import ListRenderWithMemo from "./ReactUseMemo/2ListRendering/ListRenderWithMemo";
import ListRenderWithoutMemo from "./ReactUseMemo/2ListRendering/ListRenderWithoutMemo";
import PassingObjectWithoutMemo from "./ReactUseMemo/3PassingObject/PassingObjectWithoutMemo";
import PassingObjectWithMemo from "./ReactUseMemo/3PassingObject/PassingObjectWithMemo";
import ExpensiveWithoutMemo from "./ReactUseMemo/4ExpensiveComponent/ExpensiveWithoutMemo";
import ExpensiveWithMemo from "./ReactUseMemo/4ExpensiveComponent/ExpensiveWithMemo";
import MultipleCompWithoutMemo from "./ReactUseMemo/5MultipleComponent/MultipleCompWithoutMemo";
import MultipleCompWithMemo from "./ReactUseMemo/5MultipleComponent/MultipleCompWithMemo";
import ExpenciveWithoutMemo from "./UseMemoHook/1ExpenciveCalculation/ExpenciveWithoutMemo";
import ExpenciveWithMemo from "./UseMemoHook/1ExpenciveCalculation/ExpenciveWithMemo";
import SortWithoutUseMemo from "./UseMemoHook/3Sort/SortWithoutUseMemo";
import SortWithUseMemo from "./UseMemoHook/3Sort/SortWithUseMemo";
import PropsWithoutUseMemo from "./UseMemoHook/4Props/PropsWithoutUseMemo";
import MultiplewithoutUseMemo from "./UseMemoHook/5MultipleUsememo/MultiplewithoutUseMemo";
import MultipleUseMemo from "./UseMemoHook/5MultipleUsememo/MultipleUseMemo";
import OnclickWithoutUseCallback from "./UseCallbackHook/1onclick/OnclickWithoutUseCallback";
import OnclickUseCallback from "./UseCallbackHook/1onclick/OnclickUseCallback";
import EventWithoutCallback from "./UseCallbackHook/2CallbackEvent/EventWithoutCallback";
import EventWithUseCallback from "./UseCallbackHook/2CallbackEvent/EventWithUseCallback";
import InfiniteWithoutUseCallback from "./UseCallbackHook/3Infinite/InfiniteWithoutUseCallback";
import FiniteWithUseCallback from "./UseCallbackHook/3Infinite/FiniteWithUseCallback";
import ListWithoutUseCallback from "./UseCallbackHook/4List/ListWithoutUseCallback";
import ListWithCallback from "./UseCallbackHook/4List/ListWithCallback";
import AsyncWithoutUseCallback from "./UseCallbackHook/5Async/AsyncWithoutUseCallback";
import AsyncWithUseCallback from "./UseCallbackHook/5Async/AsyncWithUseCallback";

const UseMemoHook = () => {
  return (
    <div>
      {/* React.Memo */}

      {/*1. Counter example with and without React memo */}
      {/* <WithourReactMemo/> */}
      {/* <WithReactMemo/> */}

      {/* 2. Render list with and without React memo */}
      {/* <ListRenderWithoutMemo /> */}
      {/* <ListRenderWithMemo/> */}

      {/* 3. Passing object as a props */}
      {/* <PassingObjectWithoutMemo/> */}
      {/* <PassingObjectWithMemo/> */}

      {/* 4. Expensive component */}
      {/* <ExpensiveWithoutMemo/> */}
      {/* <ExpensiveWithMemo/> */}

      {/* 5. Multiple components */}
      {/* <MultipleCompWithoutMemo/> */}
      {/* <MultipleCompWithMemo/> */}

      {/* UseMemo */}
      {/* <ExpenciveWithoutMemo/> */}
      {/* <ExpenciveWithMemo/> */}

      {/* <SortWithoutUseMemo/> */}
      {/* <SortWithUseMemo/> */}

      {/* <PropsWithoutUseMemo/> */}

      {/* <MultiplewithoutUseMemo /> */}
      {/* <MultipleUseMemo/> */}

      {/* UseCallback Hook */}

      {/* <OnclickWithoutUseCallback/> */}
      {/* <OnclickUseCallback/> */}

      {/* <EventWithoutCallback/>
      <EventWithUseCallback/> */}

      {/* <InfiniteWithoutUseCallback/> */}
      {/* <FiniteWithUseCallback/> */}

      {/* <ListWithoutUseCallback/> */}
      {/* <ListWithCallback/> */}

      {/* <AsyncWithoutUseCallback/> */}
      <AsyncWithUseCallback/>
      
    </div>
  );
};

export default UseMemoHook;
