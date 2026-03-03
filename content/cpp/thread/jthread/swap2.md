---
title: "swap(std::jthread)"
source_path: "cpp/thread/jthread/swap2"
category: "thread"
since: "C++20"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::jthread](/cpp/thread/jthread/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs). This function is not visible to ordinary [unqualified](/cpp/language/unqualified_lookup/) or [qualified lookup](/cpp/language/qualified_lookup/), and can only be found by [argument-dependent lookup](/cpp/language/adl/) when std::jthread is an associated class of the arguments.

## Declarations
```cpp
friend void swap( jthread& lhs, jthread& rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: jthreads whose states to swap

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
 
    std::jthread t1(foo);
    std::jthread t2(bar);
 
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
 
 
}
```

## See also
- [swap](/cpp/thread/jthread/swap/)
