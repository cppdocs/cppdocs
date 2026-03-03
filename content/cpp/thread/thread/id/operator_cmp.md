---
title: "operator==,!=,<,<=,>,>=,<=>(std::thread::id)"
source_path: "cpp/thread/thread/id/operator_cmp"
header: "<thread>"
category: "thread"
since: "C++11"
---

Compares two thread identifiers.

## Declarations
```cpp
bool operator==( std::thread::id lhs, std::thread::id rhs ) noexcept;
```
_(since C++11)_

```cpp
bool operator!=( std::thread::id lhs, std::thread::id rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator< ( std::thread::id lhs, std::thread::id rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator<=( std::thread::id lhs, std::thread::id rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator> ( std::thread::id lhs, std::thread::id rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
bool operator>=( std::thread::id lhs, std::thread::id rhs ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
std::strong_ordering operator<=>( std::thread::id lhs,
std::thread::id rhs ) noexcept;
```
_(since C++20)_

## Parameters
- `lhs, rhs`: thread identifiers to compare

## Example
```cpp
#include <cassert>
#include <chrono>
#include <iostream>
#include <thread>
 
 
int main()
{
    auto work = [] { std::this_thread::sleep_for(std::chrono::seconds(1)); };
    std::thread t1(work);
    std::thread t2(work);
 
    assert(t1.get_id() == t1.get_id() and
           t2.get_id() == t2.get_id() and
           t1.get_id() != t2.get_id());
 
    if (const auto cmp = t1.get_id() <=> t2.get_id(); cmp < 0)
        std::cout << "id1 < id2\n";
    else
        std::cout << "id1 > id2\n";
 
    std::cout << "id1: " << t1.get_id() << "\n"
                 "id2: " << t2.get_id() << '\n';
 
    t1.join();
    t2.join();
}
```

## See also
- [C documentation](/c/thread/thrd_equal/)
