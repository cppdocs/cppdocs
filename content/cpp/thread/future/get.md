---
title: "std::future<T>::get"
source_path: "cpp/thread/future/get"
category: "thread"
since: "C++11"
---

The get member function waits (by calling [wait()](/cpp/thread/future/wait/)) until the shared state is ready, then retrieves the value stored in the shared state (if any). Right after calling this function, [valid()](/cpp/thread/future/valid/) is false.

## Declarations
```cpp
Main template
```

```cpp
T get();
```
_(since C++11)_

```cpp
std::future<T&> specializations
```

```cpp
T& get();
```
_(since C++11)_

```cpp
std::future<void> specialization
```

```cpp
void get();
```
_(since C++11)_

## Notes
The C++ standard recommends the implementations to detect the case when [valid()](/cpp/thread/future/valid/) is false before the call and throw a [std::future_error](/cpp/thread/future_error/) with an error condition of [std::future_errc::no_state](/cpp/thread/future_errc/).

## Example
```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <string>
#include <thread>
 
std::string time()
{
    static auto start = std::chrono::steady_clock::now();
    std::chrono::duration<double> d = std::chrono::steady_clock::now() - start;
    return "[" + std::to_string(d.count()) + "s]";
}
 
int main()
{
    using namespace std::chrono_literals;
 
    {
        std::cout << time() << " launching thread\n";
        std::future<int> f = std::async(std::launch::async, []
        {
            std::this_thread::sleep_for(1s);
            return 7;
        });
        std::cout << time() << " waiting for the future, f.valid() = "
                  << f.valid() << '\n';
        int n = f.get();
        std::cout << time() << " f.get() returned " << n << ", f.valid() = "
                  << f.valid() << '\n';
    }
 
    {
        std::cout << time() << " launching thread\n";
        std::future<int> f = std::async(std::launch::async, []
        {
            std::this_thread::sleep_for(1s);
            return true ? throw std::runtime_error("7") : 7;
        });
        std::cout << time() << " waiting for the future, f.valid() = "
                  << f.valid() << '\n';
 
        try
        {
            int n = f.get();
            std::cout << time() << " f.get() returned " << n
                      << ", f.valid() = " << f.valid() << '\n';
        }
        catch (const std::exception& e)
        {
            std::cout << time() << " caught exception " << e.what()
                      << ", f.valid() = " << f.valid() << '\n';
        }
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2096 | C++11 | overload (1) needed to check whether T is MoveAssignable | not required |

## See also
- [valid](/cpp/thread/future/valid/)
