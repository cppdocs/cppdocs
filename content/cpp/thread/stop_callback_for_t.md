---
title: "std::stop_callback_for_t"
source_path: "cpp/thread/stop_callback_for_t"
header: "<stop_token>"
category: "thread"
since: "C++26"
---

The alias template stop_callback_for_t is used to obtain the stop callback type of the type T.

## Declarations
```cpp
template< class T, class CallbackFn >
using stop_callback_for_t = T::template callback_type<CallbackFn>;
```
_(since C++26)_

## Notes
The corresponding stop_callback_for_t for standard stop token types and any valid CallbackFn are:
