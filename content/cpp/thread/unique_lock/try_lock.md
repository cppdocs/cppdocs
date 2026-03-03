---
title: "std::unique_lock<Mutex>::try_lock"
source_path: "cpp/thread/unique_lock/try_lock"
category: "thread"
since: "C++11"
---

Tries to lock (i.e., takes ownership of) the associated mutex without blocking. Effectively calls mutex()->try_lock().

## Declarations
```cpp
bool try_lock();
```
_(since C++11)_

## Return value
true if the ownership of the mutex has been acquired successfully, false otherwise.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <mutex>
#include <thread>
#include <vector>
 
using namespace std::chrono_literals;
 
int main()
{
    std::mutex counter_mutex;
    std::vector<std::thread> threads;
    using Id = int;
 
    auto worker_task = [&](Id id, std::chrono::seconds wait, std::chrono::seconds acquire)
    {
        // wait for a few seconds before acquiring lock.
        std::this_thread::sleep_for(wait);
 
        std::unique_lock<std::mutex> lock(counter_mutex, std::defer_lock);
        if (lock.try_lock())
            std::cout << '#' << id << ", lock acquired.\n";
        else
        {
            std::cout << '#' << id << ", failed acquiring lock.\n";
            return;
        }
 
        // keep the lock for a while.
        std::this_thread::sleep_for(acquire);
 
        std::cout << '#' << id << ", releasing lock (via destructor).\n";
    };
 
    threads.emplace_back(worker_task, Id{0}, 0s, 2s);
    threads.emplace_back(worker_task, Id{1}, 1s, 0s);
    threads.emplace_back(worker_task, Id{2}, 3s, 0s);
 
    for (auto& thread : threads)
        thread.join();
}
```

## See also
- [lock](/cpp/thread/unique_lock/lock/)
- [try_lock_for](/cpp/thread/unique_lock/try_lock_for/)
- [TimedLockable](/cpp/named_req/timedlockable/)
- [try_lock_until](/cpp/thread/unique_lock/try_lock_until/)
- [TimedLockable](/cpp/named_req/timedlockable/)
- [unlock](/cpp/thread/unique_lock/unlock/)
