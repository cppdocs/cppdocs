---
title: "cnd_timedwait"
source_path: "c/thread/cnd_timedwait"
header: "<threads.h>"
category: "c"
---

Atomically unlocks the mutex pointed to by mutex and blocks on the condition variable pointed to by cond until the thread is signalled by [cnd_signal](/c/thread/cnd_signal/) or [cnd_broadcast](/c/thread/cnd_broadcast/), or until the TIME_UTC based time point pointed to by time_point has been reached, or until a spurious wake-up occurs. The mutex is locked again before the function returns.

## Declarations
```cpp
int cnd_timedwait( cnd_t* restrict cond, mtx_t* restrict mutex,
const struct timespec* restrict time_point );
```
_(since C11)_

## Parameters
- `cond`: pointer to the condition variable to block on
- `mutex`: pointer to the mutex to unlock for the duration of the block
- `time_point`: pointer to an object specifying timeout time to wait until

## Return value
[thrd_success](/c/thread/thrd_errors/) if successful, thrd_timedout if the timeout time has been reached before the mutex is locked, or [thrd_error](/c/thread/thrd_errors/) if an error occurred.

## See also
- [cnd_wait](/c/thread/cnd_wait/)
- [C++ documentation](/cpp/thread/condition_variable/wait_until/)
- [C++ documentation](/cpp/thread/condition_variable_any/wait_until/)
