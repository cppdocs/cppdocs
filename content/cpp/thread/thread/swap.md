---
title: "std::thread::swap"
source_path: "cpp/thread/thread/swap"
category: "thread"
since: "C++11"
---

Exchanges the underlying handles of two thread objects.

## Declarations
```cpp
void swap( std::thread& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: the thread to swap with

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
    std::thread t1(foo);
    std::thread t2(bar);
 
    std::cout << "thread 1 id: " << t1.get_id() << '\n'
              << "thread 2 id: " << t2.get_id() << '\n';
 
    std::swap(t1, t2);
 
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
- [std::swap(std::thread)](/cpp/thread/thread/swap2/)
- [std::swap](/cpp/utility/swap/)
