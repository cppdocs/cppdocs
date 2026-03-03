---
title: "std::lock_guard"
source_path: "cpp/thread/lock_guard"
header: "<mutex>"
category: "thread"
since: "C++11"
---

The class lock_guard is a mutex wrapper that provides a convenient [RAII-style](/cpp/language/raii/) mechanism for owning a mutex for the duration of a scoped block.

## Declarations
```cpp
template< class Mutex >
class lock_guard;
```
_(since C++11)_

## Notes
A common beginner error is to "forget" to give a lock_guard variable a name, e.g. std::lock_guard(mtx); (which default constructs a lock_guard variable named mtx) or std::lock_guard{mtx}; (which constructs a prvalue object that is immediately destroyed), thereby not actually constructing a lock that holds a mutex for the rest of the scope.

[std::scoped_lock](/cpp/thread/scoped_lock/) offers an alternative for lock_guard that provides the ability to lock multiple mutexes using a deadlock avoidance algorithm.

## Example
```cpp
#include <iostream>
#include <mutex>
#include <string_view>
#include <syncstream>
#include <thread>
 
volatile int g_i = 0;
std::mutex g_i_mutex;  // protects g_i
 
void safe_increment(int iterations)
{
    const std::lock_guard<std::mutex> lock(g_i_mutex);
    while (iterations-- > 0)
        g_i = g_i + 1;
    std::cout << "thread #" << std::this_thread::get_id() << ", g_i: " << g_i << '\n';
 
    // g_i_mutex is automatically released when lock goes out of scope
}
 
void unsafe_increment(int iterations)
{
    while (iterations-- > 0)
        g_i = g_i + 1;
    std::osyncstream(std::cout) << "thread #" << std::this_thread::get_id()
                                << ", g_i: " << g_i << '\n';
}
 
int main()
{
    auto test = [](std::string_view fun_name, auto fun)
    {
        g_i = 0;
        std::cout << fun_name << ":\nbefore, g_i: " << g_i << '\n';
        {
            std::jthread t1(fun, 1'000'000);
            std::jthread t2(fun, 1'000'000);
        }
        std::cout << "after, g_i: " << g_i << "\n\n";
    };
    test("safe_increment", safe_increment);
    test("unsafe_increment", unsafe_increment);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2981 | C++17 | redundant deduction guide from lock_guard<Mutex> was provided | removed |

## See also
- [unique_lock](/cpp/thread/unique_lock/)
- [scoped_lock](/cpp/thread/scoped_lock/)
