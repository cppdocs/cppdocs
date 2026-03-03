---
title: "std::thread::get_id"
source_path: "cpp/thread/thread/get_id"
category: "thread"
since: "C++11"
---

Returns a value of [std::thread::id](/cpp/thread/thread/id/) identifying the thread associated with *this.

## Declarations
```cpp
std::thread::id get_id() const noexcept;
```
_(since C++11)_

## Return value
A value of type [std::thread::id](/cpp/thread/thread/id/) identifying the thread associated with *this. If there is no thread associated, default constructed [std::thread::id](/cpp/thread/thread/id/) is returned.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
void foo()
{
    std::this_thread::sleep_for(std::chrono::seconds(1));
}
 
int main()
{
    std::thread t1(foo);
    std::thread::id t1_id = t1.get_id();
 
    std::thread t2(foo);
    std::thread::id t2_id = t2.get_id();
 
    std::cout << "t1's id: " << t1_id << '\n';
    std::cout << "t2's id: " << t2_id << '\n';
 
    t1.join();
    t2.join();
 
    std::cout << "t1's id after join: " << t1.get_id() << '\n';
    std::cout << "t2's id after join: " << t2.get_id() << '\n';
}
```

## See also
- [id](/cpp/thread/thread/id/)
- [joinable](/cpp/thread/thread/joinable/)
