---
title: "std::unique_lock<Mutex>::lock"
source_path: "cpp/thread/unique_lock/lock"
category: "thread"
since: "C++11"
---

Locks (i.e., takes ownership of) the associated mutex. Effectively calls mutex()->lock().

## Declarations
```cpp
void lock();
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <iostream>
#include <mutex>
#include <thread>
#include <vector>
 
int main()
{
    int counter = 0;
    std::mutex counter_mutex;
    std::vector<std::thread> threads;
 
    auto worker_task = [&](int id)
    {
        std::unique_lock<std::mutex> lock(counter_mutex);
        ++counter;
        std::cout << id << ", initial counter: " << counter << '\n';
        lock.unlock();
 
        // don't hold the lock while we simulate an expensive operation
        std::this_thread::sleep_for(std::chrono::seconds(1));
 
        lock.lock();
        ++counter;
        std::cout << id << ", final counter: " << counter << '\n';
    };
 
    for (int i = 0; i < 10; ++i)
        threads.emplace_back(worker_task, i);
 
    for (auto& thread : threads)
        thread.join();
}
```

## See also
- [try_lock](/cpp/thread/unique_lock/try_lock/)
- [unlock](/cpp/thread/unique_lock/unlock/)
