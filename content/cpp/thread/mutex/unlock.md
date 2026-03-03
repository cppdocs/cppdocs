---
title: "std::mutex::unlock"
source_path: "cpp/thread/mutex/unlock"
category: "thread"
since: "C++11"
---

Unlocks the mutex.

## Declarations
```cpp
void unlock();
```
_(since C++11)_

## Return value
(none)

## Notes
unlock() is usually not called directly: [std::unique_lock](/cpp/thread/unique_lock/) and [std::lock_guard](/cpp/thread/lock_guard/) are used to manage exclusive locking.

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
        int g_num_running = ++g_num;
        g_num_mutex.unlock();
        std::cout << id << " => " << g_num_running << '\n';
 
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
}
 
int main()
{
    std::thread t1(slow_increment, 0);
    std::thread t2(slow_increment, 1);
    t1.join();
    t2.join();
}
```

## See also
- [lock](/cpp/thread/mutex/lock/)
- [try_lock](/cpp/thread/mutex/try_lock/)
- [C documentation](/c/thread/mtx_unlock/)
