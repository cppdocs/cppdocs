---
title: "std::atomic<T>::wait"
source_path: "cpp/atomic/atomic/wait"
category: "atomic"
since: "C++20"
---

Performs atomic waiting operations. Behaves as if it repeatedly performs the following steps:

## Declarations
```cpp
void wait( T old, std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(since C++20) (constexpr since C++26)_

```cpp
void wait( T old,
std::memory_order order =
std::memory_order_seq_cst ) const volatile noexcept;
```
_(since C++20)_

## Parameters
- `old`: the value to check the atomic's object no longer contains
- `order`: memory order constraints to enforce

## Notes
This form of change-detection is often more efficient than simple polling or pure spinlocks.

Due to the [ABA problem](https://en.wikipedia.org/wiki/ABA_problem), transient changes from old to another value and back to old might be missed, and not unblock.

The comparison is bitwise (similar to [std::memcmp](/cpp/string/byte/memcmp/)); no comparison operator is used. Padding bits that never participate in an object's value representation are ignored.

## Example
```cpp
#include <atomic>
#include <chrono>
#include <future>
#include <iostream>
#include <thread>
 
using namespace std::literals;
 
int main()
{
    std::atomic<bool> all_tasks_completed{false};
    std::atomic<unsigned> completion_count{};
    std::future<void> task_futures[16];
    std::atomic<unsigned> outstanding_task_count{16};
 
    // Spawn several tasks which take different amounts of
    // time, then decrement the outstanding task count.
    for (std::future<void>& task_future : task_futures)
        task_future = std::async([&]
        {
            // This sleep represents doing real work...
            std::this_thread::sleep_for(50ms);
 
            ++completion_count;
            --outstanding_task_count;
 
            // When the task count falls to zero, notify
            // the waiter (main thread in this case).
            if (outstanding_task_count.load() == 0)
            {
                all_tasks_completed = true;
                all_tasks_completed.notify_one();
            }
        });
 
    all_tasks_completed.wait(false);
 
    std::cout << "Tasks completed = " << completion_count.load() << '\n';
}
```

## See also
- [notify_one](/cpp/atomic/atomic/notify_one/)
- [notify_all](/cpp/atomic/atomic/notify_all/)
- [atomic_notify_one](/cpp/atomic/atomic_notify_one/)
- [atomic_notify_all](/cpp/atomic/atomic_notify_all/)
