---
title: "std::barrier<CompletionFunction>::~barrier"
source_path: "cpp/thread/barrier/~barrier"
category: "thread"
since: "C++20"
---

Destroys the barrier.

## Declarations
```cpp
~barrier();
```
_(since C++20)_

## Notes
It is only safe to invoke the destructor if all threads have been notified. The programmer must ensure that no threads attempt to wait on *this once the destructor has been started. The destructor does not notify and release any waiting threads.
