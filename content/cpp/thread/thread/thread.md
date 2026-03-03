---
title: "std::thread::thread"
source_path: "cpp/thread/thread/thread"
category: "thread"
since: "C++11"
---

Constructs a new std::thread object.

## Declarations
```cpp
thread() noexcept;
```
_(since C++11)_

```cpp
thread( thread&& other ) noexcept;
```
_(since C++11)_

```cpp
template< class F, class... Args >
explicit thread( F&& f, Args&&... args );
```
_(since C++11)_

```cpp
thread( const thread& ) = delete;
```
_(since C++11)_

## Parameters
- `other`: another thread object to construct this thread object with
- `f`: Callable object to execute in the new thread
- `args`: arguments to pass to the new function

## Notes
The arguments to the thread function are moved or copied by value. If a reference argument needs to be passed to the thread function, it has to be wrapped (e.g., with [std::ref](/cpp/utility/functional/ref/) or [std::cref](/cpp/utility/functional/ref/)).

Any return value from the function is ignored. If the function throws an exception, [std::terminate](/cpp/error/terminate/) is called. In order to pass return values or exceptions back to the calling thread, [std::promise](/cpp/thread/promise/) or [std::async](/cpp/thread/async/) may be used.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
#include <utility>
 
void f1(int n)
{
    for (int i = 0; i < 5; ++i)
    {
        std::cout << "Thread 1 executing\n";
        ++n;
        std::this_thread::sleep_for(std::chrono::milliseconds(10));
    }
}
 
void f2(int& n)
{
    for (int i = 0; i < 5; ++i)
    {
        std::cout << "Thread 2 executing\n";
        ++n;
        std::this_thread::sleep_for(std::chrono::milliseconds(10));
    }
}
 
class foo
{
public:
    void bar()
    {
        for (int i = 0; i < 5; ++i)
        {
            std::cout << "Thread 3 executing\n";
            ++n;
            std::this_thread::sleep_for(std::chrono::milliseconds(10));
        }
    }
    int n = 0;
};
 
class baz
{
public:
    void operator()()
    {
        for (int i = 0; i < 5; ++i)
        {
            std::cout << "Thread 4 executing\n";
            ++n;
            std::this_thread::sleep_for(std::chrono::milliseconds(10));
        }
    }
    int n = 0;
};
 
int main()
{
    int n = 0;
    foo f;
    baz b;
    std::thread t1; // t1 is not a thread
    std::thread t2(f1, n + 1); // pass by value
    std::thread t3(f2, std::ref(n)); // pass by reference
    std::thread t4(std::move(t3)); // t4 is now running f2(). t3 is no longer a thread
    std::thread t5(&foo::bar, &f); // t5 runs foo::bar() on object f
    std::thread t6(b); // t6 runs baz::operator() on a copy of object b
    t2.join();
    t4.join();
    t5.join();
    t6.join();
    std::cout << "Final value of n is " << n << '\n';
    std::cout << "Final value of f.n (foo::n) is " << f.n << '\n';
    std::cout << "Final value of b.n (baz::n) is " << b.n << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2097 | C++11 | for overload (3), F could be std::thread | F is constrained |
| LWG 3476 | C++20 | overload (3) directly required (the decayed types of)F and the argument types to be move constructible | removed theserequirements[1] |

## See also
- [(constructor)](/cpp/thread/jthread/jthread/)
- [C documentation](/c/thread/thrd_create/)
