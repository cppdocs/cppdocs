---
title: "std::thread::joinable"
source_path: "cpp/thread/thread/joinable"
category: "thread"
since: "C++11"
---

Checks if the std::thread object identifies an active thread of execution. Specifically, returns true if get_id() != [std::thread::id](/cpp/thread/thread/id/)(). So a default constructed thread is not joinable.

## Declarations
```cpp
bool joinable() const noexcept;
```
_(since C++11)_

## Return value
true if the std::thread object identifies an active thread of execution, false otherwise.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
using namespace std::chrono_literals;
 
void foo()
{
    std::this_thread::sleep_for(500ms);
}
 
int main()
{
    std::cout << std::boolalpha;
 
    std::thread t;
    std::cout << "before starting, joinable: " << t.joinable() << '\n';
 
    t = std::thread{foo};
    std::cout << "after starting, joinable: " << t.joinable() << '\n';
 
    t.join();
    std::cout << "after joining, joinable: " << t.joinable() << '\n';
 
    t = std::thread{foo};
    t.detach();
    std::cout << "after detaching, joinable: " << t.joinable() << '\n';
    std::this_thread::sleep_for(1500ms);
}
```

## See also
- [get_id](/cpp/thread/thread/get_id/)
- [join](/cpp/thread/thread/join/)
- [detach](/cpp/thread/thread/detach/)
