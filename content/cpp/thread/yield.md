---
title: "std::this_thread::yield"
source_path: "cpp/thread/yield"
header: "<thread>"
category: "thread"
since: "C++11"
---

Provides a hint to the implementation to reschedule the execution of threads, allowing other threads to run.

## Declarations
```cpp
void yield() noexcept;
```
_(since C++11)_

## Return value
(none)

## Notes
The exact behavior of this function depends on the implementation, in particular on the mechanics of the OS scheduler in use and the state of the system. For example, a first-in-first-out realtime scheduler (SCHED_FIFO in Linux) would suspend the current thread and put it on the back of the queue of the same-priority threads that are ready to run, and if there are no other threads at the same priority, yield has no effect.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
// "busy sleep" while suggesting that other threads run 
// for a small amount of time
void little_sleep(std::chrono::microseconds us)
{
    auto start = std::chrono::high_resolution_clock::now();
    auto end = start + us;
    do
    {
        std::this_thread::yield();
    }
    while (std::chrono::high_resolution_clock::now() < end);
}
 
int main()
{
    auto start = std::chrono::high_resolution_clock::now();
 
    little_sleep(std::chrono::microseconds(100));
 
    auto elapsed = std::chrono::high_resolution_clock::now() - start;
    std::cout << "waited for "
              << std::chrono::duration_cast<std::chrono::microseconds>(elapsed).count()
              << " microseconds\n";
}
```

## See also
- [C documentation](/c/thread/thrd_yield/)
