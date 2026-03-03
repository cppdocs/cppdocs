---
title: "std::shared_timed_mutex"
source_path: "cpp/thread/shared_timed_mutex"
header: "<shared_mutex>"
category: "thread"
since: "C++14"
---

The shared_timed_mutex class is a synchronization primitive that can be used to protect shared data from being simultaneously accessed by multiple threads. In contrast to other mutex types which facilitate exclusive access, a shared_timed_mutex has two levels of access:

## Declarations
```cpp
class shared_timed_mutex;
```
_(since C++14)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_shared_timed_mutex
201402L
(C++14)
std::shared_timed_mutex

## Example
```cpp
#include <mutex>
#include <shared_mutex>
 
class R
{
    mutable std::shared_timed_mutex mut;
    /* data */
public:
    R& operator=(const R& other)
    {
        // requires exclusive ownership to write to *this
        std::unique_lock<std::shared_timed_mutex> lhs(mut, std::defer_lock);
        // requires shared ownership to read from other
        std::shared_lock<std::shared_timed_mutex> rhs(other.mut, std::defer_lock);
        std::lock(lhs, rhs);
        /* assign data */
        return *this;
    }
};
 
int main()
{
    R r;
}
```
