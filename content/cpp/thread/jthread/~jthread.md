---
title: "std::jthread::~jthread"
source_path: "cpp/thread/jthread/~jthread"
category: "thread"
since: "C++20"
---

Destroys the jthread object.

## Declarations
```cpp
~jthread();
```
_(since C++20)_

## Notes
The request_stop() has no effect if the jthread was previously requested to stop.

A jthread object does not have an associated thread after

If join() throws an exception (e.g. because deadlock is detected), [std::terminate()](/cpp/error/terminate/) may be called.

## Example
This section is incompleteReason: no example

## See also
- [(destructor)](/cpp/thread/thread/~thread/)
