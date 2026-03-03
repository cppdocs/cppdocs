---
title: "std::promise<R>::set_exception_at_thread_exit"
source_path: "cpp/thread/promise/set_exception_at_thread_exit"
category: "thread"
since: "C++11"
---

Stores the exception pointer p into the shared state without making the state ready immediately. The state is made ready when the current thread exits, after all variables with thread-local storage duration have been destroyed.

## Declarations
```cpp
void set_exception_at_thread_exit( std::exception_ptr p );
```
_(since C++11)_

## Parameters
- `p`: exception pointer to store. The behavior is undefined if p is nullptr

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [set_exception](/cpp/thread/promise/set_exception/)
