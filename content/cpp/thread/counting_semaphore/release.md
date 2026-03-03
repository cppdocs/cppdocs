---
title: "std::counting_semaphore<LeastMaxValue>::release"
source_path: "cpp/thread/counting_semaphore/release"
category: "thread"
since: "C++20"
---

Atomically increments the internal counter by the value of update. Any thread(s) waiting for the counter to be greater than 0, such as due to being blocked in acquire, will subsequently be unblocked.

## Declarations
```cpp
void release( std::ptrdiff_t update = 1 );
```
_(since C++20)_

## Parameters
- `update`: the amount to increment the internal counter by

## See also
- [acquire](/cpp/thread/counting_semaphore/acquire/)
- [try_acquire](/cpp/thread/counting_semaphore/try_acquire/)
- [try_acquire_for](/cpp/thread/counting_semaphore/try_acquire_for/)
- [try_acquire_until](/cpp/thread/counting_semaphore/try_acquire_until/)
