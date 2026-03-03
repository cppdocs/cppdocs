---
title: "std::counting_semaphore<LeastMaxValue>::try_acquire"
source_path: "cpp/thread/counting_semaphore/try_acquire"
category: "thread"
since: "C++20"
---

Tries to atomically decrement the internal counter by 1 if it is greater than 0; no blocking occurs regardless.

## Declarations
```cpp
bool try_acquire() noexcept;
```
_(since C++20)_

## Return value
true if it decremented the internal counter, otherwise false.

## Notes
Implementations are allowed to fail to decrement the counter even if it was greater than 0 - i.e., they are allowed to spuriously fail and return false.

## See also
- [release](/cpp/thread/counting_semaphore/release/)
- [acquire](/cpp/thread/counting_semaphore/acquire/)
- [try_acquire_for](/cpp/thread/counting_semaphore/try_acquire_for/)
- [try_acquire_until](/cpp/thread/counting_semaphore/try_acquire_until/)
