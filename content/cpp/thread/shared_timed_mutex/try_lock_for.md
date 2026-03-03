---
title: "std::shared_timed_mutex::try_lock_for"
source_path: "cpp/thread/shared_timed_mutex/try_lock_for"
category: "thread"
since: "C++14"
---

Tries to lock the mutex. Blocks until the specified duration timeout_duration has elapsed (timeout) or the lock is acquired (owns the mutex), whichever comes first. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
template< class Rep, class Period >
bool try_lock_for( const std::chrono::duration<Rep, Period>& timeout_duration );
```
_(since C++14)_

## Parameters
- `timeout_duration`: minimum duration to block for

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <mutex>
#include <sstream>
#include <thread>
#include <vector>
 
using namespace std::chrono_literals;
 
std::mutex cout_mutex; // control access to std::cout
std::timed_mutex mutex;
 
void job(int id)
{
    std::ostringstream stream;
 
    for (int i = 0; i < 3; ++i)
    {
        if (mutex.try_lock_for(100ms))
        {
            stream << "success ";
            std::this_thread::sleep_for(100ms);
            mutex.unlock();
        }
        else
            stream << "failed ";
 
        std::this_thread::sleep_for(100ms);
    }
 
    std::lock_guard<std::mutex> lock{cout_mutex};
    std::cout << '[' << id << "] " << stream.str() << '\n';
}
 
int main()
{
    std::vector<std::thread> threads;
    for (int i{0}; i < 4; ++i)
        threads.emplace_back(job, i);
 
    for (auto& th : threads)
        th.join();
}
```

## See also
- [lock](/cpp/thread/shared_timed_mutex/lock/)
- [try_lock](/cpp/thread/shared_timed_mutex/try_lock/)
- [try_lock_until](/cpp/thread/shared_timed_mutex/try_lock_until/)
- [unlock](/cpp/thread/shared_timed_mutex/unlock/)
