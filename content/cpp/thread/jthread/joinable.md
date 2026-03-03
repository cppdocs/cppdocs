---
title: "std::jthread::joinable"
source_path: "cpp/thread/jthread/joinable"
category: "thread"
since: "C++20"
---

Checks if the std::jthread object identifies an active thread of execution. Specifically, returns true if get_id() != std::jthread::id(). So a default constructed jthread is not joinable.

## Declarations
```cpp
bool joinable() const noexcept;
```
_(since C++20)_

## Return value
true if the std::jthread object identifies an active thread of execution, false otherwise.

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
 
    std::jthread t;
    std::cout << "before starting, joinable: " << t.joinable() << '\n';
 
    t = std::jthread{foo};
    std::cout << "after starting, joinable: " << t.joinable() << '\n';
 
    t.join();
    std::cout << "after joining, joinable: " << t.joinable() << '\n';
 
    t = std::jthread{foo};
    t.detach();
    std::cout << "after detaching, joinable: " << t.joinable() << '\n';
 
}
```

## See also
- [get_id](/cpp/thread/jthread/get_id/)
- [join](/cpp/thread/jthread/join/)
- [detach](/cpp/thread/jthread/detach/)
