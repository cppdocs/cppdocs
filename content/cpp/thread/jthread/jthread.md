---
title: "std::jthread::jthread"
source_path: "cpp/thread/jthread/jthread"
category: "thread"
since: "C++20"
---

Constructs new std::jthread object.

## Declarations
```cpp
jthread() noexcept;
```
_(since C++20)_

```cpp
jthread( jthread&& other ) noexcept;
```
_(since C++20)_

```cpp
template< class F, class... Args >
explicit jthread( F&& f, Args&&... args );
```
_(since C++20)_

```cpp
jthread( const jthread& ) = delete;
```
_(since C++20)_

## Parameters
- `other`: another std::jthread object to construct this std::jthread object with
- `f`: Callable object to execute in the new thread
- `args`: arguments to pass to the new function

## Notes
The arguments to the thread function are moved or copied by value. If a reference argument needs to be passed to the thread function, it has to be wrapped (e.g. with [std::ref](/cpp/utility/functional/ref/) or [std::cref](/cpp/utility/functional/ref/)).

Any return value from the function is ignored. If the function throws an exception, [std::terminate](/cpp/error/terminate/) is called. In order to pass return values or exceptions back to the calling thread, [std::promise](/cpp/thread/promise/) or [std::async](/cpp/thread/async/) may be used.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
#include <utility>
 
using namespace std::literals;
 
void f1(int n)
{
    for (int i = 0; i < 5; ++i)
    {
        std::cout << "Thread 1 executing\n";
        ++n;
        std::this_thread::sleep_for(10ms);
    }
}
 
void f2(int& n)
{
    for (int i = 0; i < 5; ++i)
    {
        std::cout << "Thread 2 executing\n";
        ++n;
        std::this_thread::sleep_for(10ms);
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
            std::this_thread::sleep_for(10ms);
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
            std::this_thread::sleep_for(10ms);
        }
    }
    int n = 0;
};
 
int main()
{
    int n = 0;
    foo f;
    baz b;
    std::jthread t0; // t0 is not a thread
    std::jthread t1(f1, n + 1); // pass by value
    std::jthread t2a(f2, std::ref(n)); // pass by reference
    std::jthread t2b(std::move(t2a)); // t2b is now running f2(). t2a is no longer a thread
    std::jthread t3(&foo::bar, &f); // t3 runs foo::bar() on object f
    std::jthread t4(b); // t4 runs baz::operator() on a copy of object b
    t1.join();
    t2b.join();
    t3.join();
    std::cout << "Final value of n is " << n << '\n';
    std::cout << "Final value of f.n (foo::n) is " << f.n << '\n';
    std::cout << "Final value of b.n (baz::n) is " << b.n << '\n';
    // t4 joins on destruction
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3476 | C++20 | overload (3) directly required (the decayed types of)F and the argument types to be move constructible | removed theserequirements[1] |

## See also
- [(constructor)](/cpp/thread/thread/thread/)
- [C documentation](/c/thread/thrd_create/)
