---
title: "std::barrier"
source_path: "cpp/thread/barrier"
header: "<barrier>"
category: "thread"
since: "C++20"
---

The class template std::barrier provides a thread-coordination mechanism that blocks a group of threads of known size until all threads in that group have reached the barrier. Unlike [std::latch](/cpp/thread/latch/), barriers are reusable: once a group of arriving threads are unblocked, the barrier can be reused. Unlike [std::latch](/cpp/thread/latch/), barriers execute a possibly empty callable before unblocking threads.

## Declarations
```cpp
template< class CompletionFunction = /* see below */ >
class barrier;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_barrier
201907L
(C++20)
std::barrier
202302L
(C++20)(DR)
Relaxed guarantees for phase completion

## Example
```cpp
#include <barrier>
#include <iostream>
#include <string>
#include <syncstream>
#include <thread>
#include <vector>
 
int main()
{
    const auto workers = {"Anil", "Busara", "Carl"};
 
    auto on_completion = []() noexcept
    {
        // locking not needed here
        static auto phase =
            "... done\n"
            "Cleaning up...\n";
        std::cout << phase;
        phase = "... done\n";
    };
 
    std::barrier sync_point(std::ssize(workers), on_completion);
 
    auto work = [&](std::string name)
    {
        std::string product = "  " + name + " worked\n";
        std::osyncstream(std::cout) << product;  // ok, op<< call is atomic
        sync_point.arrive_and_wait();
 
        product = "  " + name + " cleaned\n";
        std::osyncstream(std::cout) << product;
        sync_point.arrive_and_wait();
    };
 
    std::cout << "Starting...\n";
    std::vector<std::jthread> threads;
    threads.reserve(std::size(workers));
    for (auto const& worker : workers)
        threads.emplace_back(work, worker);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2588R3 | C++20 | old phase completion guarantees might prevent hardware acceleration | relaxed |

## See also
- [latch](/cpp/thread/latch/)
