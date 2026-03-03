---
title: "std::unique_lock"
source_path: "cpp/thread/unique_lock"
header: "<mutex>"
category: "thread"
since: "C++11"
---

The class unique_lock is a general-purpose mutex ownership wrapper allowing deferred locking, time-constrained attempts at locking, recursive locking, transfer of lock ownership, and use with condition variables.

## Declarations
```cpp
template< class Mutex >
class unique_lock;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <mutex>
#include <thread>
 
struct Box
{
    explicit Box(int num) : num_things{num} {}
 
    int num_things;
    std::mutex m;
};
 
void transfer(Box& from, Box& to, int num)
{
    // don't actually take the locks yet
    std::unique_lock lock1{from.m, std::defer_lock};
    std::unique_lock lock2{to.m, std::defer_lock};
 
    // lock both unique_locks without deadlock
    std::lock(lock1, lock2);
 
    from.num_things -= num;
    to.num_things += num;
 
    // “from.m” and “to.m” mutexes unlocked in unique_lock dtors
}
 
int main()
{
    Box acc1{100};
    Box acc2{50};
 
    std::thread t1{transfer, std::ref(acc1), std::ref(acc2), 10};
    std::thread t2{transfer, std::ref(acc2), std::ref(acc1), 5};
 
    t1.join();
    t2.join();
 
    std::cout << "acc1: " << acc1.num_things << "\n"
                 "acc2: " << acc2.num_things << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2981 | C++17 | redundant deduction guide from unique_lock<Mutex> was provided | removed |

## See also
- [lock](/cpp/thread/lock/)
- [lock_guard](/cpp/thread/lock_guard/)
- [scoped_lock](/cpp/thread/scoped_lock/)
- [mutex](/cpp/thread/mutex/)
