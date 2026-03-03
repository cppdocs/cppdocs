---
title: "std::stop_source::request_stop"
source_path: "cpp/thread/stop_source/request_stop"
category: "thread"
since: "C++20"
---

Issues a stop request to the stop-state, if the stop_source object has a stop-state and it has not yet already had stop requested.

## Declarations
```cpp
bool request_stop() noexcept;
```
_(since C++20)_

## Return value
true if the stop_source object has a stop-state and this invocation made a stop request, otherwise false.

## Notes
If the request_stop() does issue a stop request (i.e., returns true), then any stop_callbacks registered for the same associated stop-state will be invoked synchronously, on the same thread request_stop() is issued on. If an invocation of a callback exits via an exception, [std::terminate](/cpp/error/terminate/) is called.

If the stop_source object has a stop-state but a stop request has already been made, this function returns false. However there is no guarantee that another stop_source object which has just (successfully) requested stop is not still in the middle of invoking a stop_callback function.

If the request_stop() does issue a stop request (i.e., returns true), then all condition variables of base type [std::condition_variable_any](/cpp/thread/condition_variable_any/) registered with an interruptible wait for stop_tokens associated with the stop_source's stop-state will be notified.

## Example
This section is incompleteReason: no example
