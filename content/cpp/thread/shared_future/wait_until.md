---
title: "std::shared_future<T>::wait_until"
source_path: "cpp/thread/shared_future/wait_until"
category: "thread"
since: "C++11"
---

wait_until waits for a result to become available. It blocks until specified timeout_time has been reached or the result becomes available, whichever comes first. The return value indicates why wait_until returned.

## Declarations
```cpp
template< class Clock, class Duration >
std::future_status wait_until( const std::chrono::time_point<Clock,Duration>& timeout_time ) const;
```
_(since C++11)_

## Parameters
- `timeout_time`: maximum time point to block until

## Notes
The implementations are encouraged to detect the case when valid() == false before the call and throw a [std::future_error](/cpp/thread/future_error/) with an error condition of [future_errc::no_state](/cpp/thread/future_errc/).

The standard recommends that the clock tied to timeout_time be used to measure time; that clock is not required to be a monotonic clock. There are no guarantees regarding the behavior of this function if the clock is adjusted discontinuously, but the existing implementations convert timeout_time from Clock to [std::chrono::system_clock](/cpp/chrono/system_clock/) and delegate to POSIX [pthread_cond_timedwait](https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_cond_timedwait.html) so that the wait honors adjustments to the system clock, but not to the user-provided Clock. In any case, the function also may wait for longer than until after timeout_time has been reached due to scheduling or resource contention delays.

## Example
This section is incompleteReason: no example

## See also
- [wait](/cpp/thread/shared_future/wait/)
- [wait_for](/cpp/thread/shared_future/wait_for/)
