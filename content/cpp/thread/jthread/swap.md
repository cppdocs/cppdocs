---
title: "std::jthread::swap"
source_path: "cpp/thread/jthread/swap"
category: "thread"
since: "C++20"
---

Exchanges the underlying handles of two jthread objects.

## Declarations
```cpp
void swap( std::jthread& other ) noexcept;
```
_(since C++20)_

## Parameters
- `other`: the jthread to swap with

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
    std::jthread t1(foo);
    std::jthread t2(bar);
 
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
 
 
}
```

## See also
- [swap(std::jthread)](/cpp/thread/jthread/swap2/)
- [std::swap](/cpp/utility/swap/)
