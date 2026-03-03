---
title: "std::notify_all_at_thread_exit"
source_path: "cpp/thread/notify_all_at_thread_exit"
header: "<condition_variable>"
category: "thread"
since: "C++11"
---

notify_all_at_thread_exit provides a mechanism to notify other threads that a given thread has completely finished, including destroying all [thread_local](/cpp/keyword/thread_local/) objects. It operates as follows:

## Declarations
```cpp
void notify_all_at_thread_exit( std::condition_variable& cond,
std::unique_lock<std::mutex> lk );
```
_(since C++11)_

## Parameters
- `cond`: the condition variable to notify at thread exit
- `lk`: the lock associated with the condition variable cond

## Return value
(none)

## Notes
An equivalent effect may be achieved with the facilities provided by [std::promise](/cpp/thread/promise/) or [std::packaged_task](/cpp/thread/packaged_task/).

The supplied lock lk is held until the thread exits. Once this function has been called, no more threads may acquire the same lock in order to wait on cond. If some threads are waiting on this condition variable, ensure that the condition being waited for is satisfied while holding the lock on lk, and that this lock is not released and reacquired prior to calling notify_all_at_thread_exit to avoid confusion from spurious wakeups in other threads.

In typical use cases, this function is the last thing called by a detached thread.

## Example
```cpp
#include <cassert>
#include <condition_variable>
#include <mutex>
#include <string>
#include <thread>
 
std::mutex m;
std::condition_variable cv;
 
bool ready = false;
std::string result; // some arbitrary type
 
void thread_func()
{
    thread_local std::string thread_local_data = "42";
 
    std::unique_lock<std::mutex> lk(m);
 
    // assign a value to result using thread_local data
    result = thread_local_data;
    ready = true;
 
    std::notify_all_at_thread_exit(cv, std::move(lk));
 
}   // 1. destroy thread_locals;
    // 2. unlock mutex;
    // 3. notify cv.
 
int main()
{
    std::thread t(thread_func);
    t.detach();
 
    // do other work
    // ...
 
    // wait for the detached thread
    std::unique_lock<std::mutex> lk(m);
    cv.wait(lk, []{ return ready; });
 
    // result is ready and thread_local destructors have finished, no UB
    assert(result == "42");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2140 | C++11 | the call to notify_all_at_thread_exitsynchronized with calls to functions waiting on cond | updated the synchronizationrequirement |

## See also
- [set_value_at_thread_exit](/cpp/thread/promise/set_value_at_thread_exit/)
- [make_ready_at_thread_exit](/cpp/thread/packaged_task/make_ready_at_thread_exit/)
