---
title: "std::latch"
source_path: "cpp/thread/latch"
header: "<latch>"
category: "thread"
since: "C++20"
---

The latch class is a downward counter of type [std::ptrdiff_t](/cpp/types/ptrdiff_t/) which can be used to synchronize threads. The value of the counter is initialized on creation. Threads may block on the latch until the counter is decremented to zero. There is no possibility to increase or reset the counter, which makes the latch a single-use barrier.

## Declarations
```cpp
class latch;
```
_(since C++20)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_latch
201907L
(C++20)
std::latch

## Example
```cpp
#include <functional>
#include <iostream>
#include <latch>
#include <string>
#include <thread>
 
struct Job
{
    const std::string name;
    std::string product{"not worked"};
    std::thread action{};
};
 
int main()
{
    Job jobs[]{{"Annika"}, {"Buru"}, {"Chuck"}};
 
    std::latch work_done{std::size(jobs)};
    std::latch start_clean_up{1};
 
    auto work = [&](Job& my_job)
    {
        my_job.product = my_job.name + " worked";
        work_done.count_down();
        start_clean_up.wait();
        my_job.product = my_job.name + " cleaned";
    };
 
    std::cout << "Work is starting... ";
    for (auto& job : jobs)
        job.action = std::thread{work, std::ref(job)};
 
    work_done.wait();
    std::cout << "done:\n";
    for (auto const& job : jobs)
        std::cout << "  " << job.product << '\n';
 
    std::cout << "Workers are cleaning up... ";
    start_clean_up.count_down();
    for (auto& job : jobs)
        job.action.join();
 
    std::cout << "done:\n";
    for (auto const& job : jobs)
        std::cout << "  " << job.product << '\n';
}
```

## See also
- [barrier](/cpp/thread/barrier/)
