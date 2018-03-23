Usage
======

`store.js`
----------
```js
import * as overrides from "./myOverrides"
import * as customServices from "./myServices";
import { ActionTypes, Store } from "@civility/store";


// Initialize the Store, and extend or override with custom methods
export const myStore = new Store({
  actions: { myAction: overrides.myAction },
  reducers: { myReducer: overrides.myReducer },
  services: { customServices },
});


// Append, prepend, or override existing middleware by name
myStore.appendMiddleware(myMiddleware);
myStore.prependMiddleware(myMiddleware);
myStore.overrideMiddlware("logger", myMiddleware);
```


`overrides.js`
--------------
```js
const type = "MY_ACTION";
export const myActionCreator = (param) => ({ type, param });
myActionCreator.type = type;

const types = [ "ASYNC_FETCH", "ASYNC_SUCCESS", "ASYNC_FAIL" ];
export const myAsyncActionCreator = (param) => ({ types, param });
myActionCreator.types = types;

export function myReducer(state = {}, action) {
  return (action.type === type) ? { param } : state;
}

export const myMiddleware = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
}
```


`myComponent.js`
----------------
```js
import { dispatcher } from "./myStore";
dispatcher.createAlert("BE ALERTED");
```


Overrides
=====
Override services with [Swagger CodeGen](https://github.com/swagger-api/swagger-codegen.git) code.
