---
title: "std::shared_timed_mutex::lock"
source_path: "cpp/thread/shared_timed_mutex/lock"
category: "thread"
since: "C++14"
---

Locks the mutex. If another thread has already locked the mutex, a call to lock will block execution until the lock is acquired.

## Declarations
```cpp
void lock();
```
_(since C++14)_

## Return value
(none)

## Notes
lock() is usually not called directly: [std::unique_lock](/cpp/thread/unique_lock/), [std::scoped_lock](/cpp/thread/scoped_lock/), and [std::lock_guard](/cpp/thread/lock_guard/) are used to manage exclusive locking.

Shared mutexes do not support direct transition from shared to unique ownership mode: the shared lock has to be relinquished with [unlock_shared()](/cpp/thread/shared_timed_mutex/unlock_shared/) before exclusive ownership may be obtained with lock(). [boost::upgrade_mutex](https://www.boost.org/doc/libs/release/doc/html/thread/synchronization.html#thread.synchronization.mutex_types.upgrade_mutex) may be used for this purpose.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <mutex>
#include <thread>
 
int g_num = 0; // protected by g_num_mutex
std::mutex g_num_mutex;
 
void slow_increment(int id) 
{
    for (int i = 0; i < 3; ++i)
    {
        g_num_mutex.lock(); 
        ++g_num;
        // note, that the mutex also syncronizes the output
        std::cout << "id: " << id << ", g_num: " << g_num << '\n';
        g_num_mutex.unlock();
 
        std::this_thread::sleep_for(std::chrono::milliseconds(234));
    }
}
 
int main()
{
    std::thread t1{slow_increment, 0};
    std::thread t2{slow_increment, 1};
    t1.join();
    t2.join();
}
```

## See also
- [try_lock](/cpp/thread/shared_timed_mutex/try_lock/)
- [unlock](/cpp/thread/shared_timed_mutex/unlock/)
- [C documentation](/c/thread/mtx_lock/)
