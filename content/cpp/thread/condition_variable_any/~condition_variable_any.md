---
title: "std::condition_variable_any::~condition_variable_any"
source_path: "cpp/thread/condition_variable_any/~condition_variable_any"
category: "thread"
since: "C++11"
---

Destroys the object of type [std::condition_variable_any](/cpp/thread/condition_variable_any/).

## Declarations
```cpp
~condition_variable_any();
```
_(since C++11)_

## Notes
It is only safe to invoke the destructor if all threads have been notified. It is not required that they have exited their respective wait functions: some threads may still be waiting to reacquire the associated lock, or may be waiting to be scheduled to run after reacquiring it.

The programmer must ensure that no threads attempt to wait on *this once the destructor has been started, especially when the waiting threads are calling the wait functions in a loop or are using the overloads of the wait functions that take a predicate.

## See also
- [C documentation](/c/thread/cnd_destroy/)
