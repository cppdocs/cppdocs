---
title: "std::condition_variable::wait_until"
source_path: "cpp/thread/condition_variable/wait_until"
category: "thread"
since: "C++11"
---

wait_until causes the current thread to block until the condition variable is notified, the given time point has been reached, or a spurious wakeup occurs. pred can be optionally provided to detect spurious wakeup.

## Declarations
```cpp
template< class Clock, class Duration >
std::cv_status
wait_until( std::unique_lock<std::mutex>& lock,
const std::chrono::time_point<Clock, Duration>& abs_time );
```
_(since C++11)_

```cpp
template< class Clock, class Duration, class Predicate >
bool wait_until( std::unique_lock<std::mutex>& lock,
const std::chrono::time_point<Clock, Duration>& abs_time,
Predicate pred );
```
_(since C++11)_

## Parameters
- `lock`: an lock which must be locked by the calling thread
- `abs_time`: the time point where waiting expires
- `pred`: the predicate to check whether the waiting can be completed

## Notes
The standard recommends that the clock tied to abs_time be used to measure time; that clock is not required to be a monotonic clock. There are no guarantees regarding the behavior of this function if the clock is adjusted discontinuously, but the existing implementations convert abs_time from Clock to [std::chrono::system_clock](/cpp/chrono/system_clock/) and delegate to POSIX [pthread_cond_timedwait](https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_cond_timedwait.html) so that the wait honors adjustments to the system clock, but not to the user-provided Clock. In any case, the function also may wait for longer than until after abs_time has been reached due to scheduling or resource contention delays.

Even if the clock in use is [std::chrono::steady_clock](/cpp/chrono/steady_clock/) or another monotonic clock, a system clock adjustment may induce a spurious wakeup.

The effects of notify_one()/notify_all() and each of the three atomic parts of wait()/wait_for()/wait_until() (unlock+wait, wakeup, and lock) take place in a single total order that can be viewed as [modification order](/cpp/atomic/memory_order/#Modification_order) of an atomic variable: the order is specific to this individual condition variable. This makes it impossible for notify_one() to, for example, be delayed and unblock a thread that started waiting just after the call to notify_one() was made.

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <iostream>
#include <thread>
 
std::condition_variable cv;
std::mutex cv_m; // This mutex is used for three purposes:
                 // 1) to synchronize accesses to i
                 // 2) to synchronize accesses to std::cerr
                 // 3) for the condition variable cv
int i = 0;
 
void waits()
{
    std::unique_lock<std::mutex> lk(cv_m);
    std::cerr << "Waiting... \n";
    cv.wait(lk, []{ return i == 1; });
    std::cerr << "...finished waiting. i == 1\n";
}
 
void signals()
{
    std::this_thread::sleep_for(std::chrono::seconds(1));
    {
        std::lock_guard<std::mutex> lk(cv_m);
        std::cerr << "Notifying...\n";
    }
    cv.notify_all();
 
    std::this_thread::sleep_for(std::chrono::seconds(1));
 
    {
        std::lock_guard<std::mutex> lk(cv_m);
        i = 1;
        std::cerr << "Notifying again...\n";
    }
    cv.notify_all();
}
 
int main()
{
    std::thread t1(waits), t2(waits), t3(waits), t4(signals);
    t1.join(); 
    t2.join(); 
    t3.join();
    t4.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2093 | C++11 | timeout-related exceptions were missing in the specification | mentions these exceptions |
| LWG 2114(P2167R3) | C++11 | convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |
| LWG 2135 | C++11 | the behavior was unclear if lock.lock() throws an exception | calls std::terminate in this case |

## See also
- [wait](/cpp/thread/condition_variable/wait/)
- [wait_for](/cpp/thread/condition_variable/wait_for/)
