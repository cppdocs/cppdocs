---
title: "std::swap(std::thread)"
source_path: "cpp/thread/thread/swap2"
category: "thread"
since: "C++11"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::thread](/cpp/thread/thread/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
void swap( std::thread& lhs, std::thread& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: threads whose states to swap

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
void foo()
{
    std::this_thread::sleep_for(std::chrono::seconds(1));
}
 
void bar()
{
    std::this_thread::sleep_for(std::chrono::seconds(1));
}
 
int main()
{
    using std::swap;
 
    std::thread t1(foo);
    std::thread t2(bar);
 
    std::cout << "thread 1 id: " << t1.get_id() << '\n'
              << "thread 2 id: " << t2.get_id() << '\n';
 
    swap(t1, t2);
 
    std::cout << "after std::swap(t1, t2):" << '\n'
              << "thread 1 id: " << t1.get_id() << '\n'
              << "thread 2 id: " << t2.get_id() << '\n';
 
    t1.swap(t2);
 
    std::cout << "after t1.swap(t2):" << '\n'
              << "thread 1 id: " << t1.get_id() << '\n'
              << "thread 2 id: " << t2.get_id() << '\n';
 
    t1.join();
    t2.join();
}
```

## See also
- [swap](/cpp/thread/thread/swap/)
