---
title: "std::counting_semaphore<LeastMaxValue>::~counting_semaphore"
source_path: "cpp/thread/counting_semaphore/~counting_semaphore"
category: "thread"
since: "C++20"
---

Destroys the counting_semaphore object.

## Declarations
```cpp
~counting_semaphore();
```
_(since C++20)_

## Notes
It is only safe to invoke the destructor if all threads have been notified. The programmer must ensure that no threads attempt to wait on *this once the destructor has been started. The destructor does not notify and release any waiting threads.
