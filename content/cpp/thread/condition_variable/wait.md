---
title: "std::condition_variable::wait"
source_path: "cpp/thread/condition_variable/wait"
category: "thread"
since: "C++11"
---

wait causes the current thread to block until the condition variable is notified or a spurious wakeup occurs. pred can be optionally provided to detect spurious wakeup.

## Declarations
```cpp
void wait( std::unique_lock<std::mutex>& lock );
```
_(since C++11)_

```cpp
template< class Predicate >
void wait( std::unique_lock<std::mutex>& lock, Predicate pred );
```
_(since C++11)_

## Parameters
- `lock`: an lock which must be locked by the calling thread
- `pred`: the predicate to check whether the waiting can be completed

## Notes
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
| LWG 2114(P2167R3) | C++11 | convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |
| LWG 2135 | C++11 | the behavior was unclear if lock.lock() throws an exception | calls std::terminate in this case |

## See also
- [wait_for](/cpp/thread/condition_variable/wait_for/)
- [wait_until](/cpp/thread/condition_variable/wait_until/)
- [C documentation](/c/thread/cnd_wait/)
