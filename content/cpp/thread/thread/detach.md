---
title: "std::thread::detach"
source_path: "cpp/thread/thread/detach"
category: "thread"
since: "C++11"
---

Separates the thread of execution from the thread object, allowing execution to continue independently. Any allocated resources will be freed once the thread exits.

## Declarations
```cpp
void detach();
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
void independentThread() 
{
    std::cout << "Starting concurrent thread.\n";
    std::this_thread::sleep_for(std::chrono::seconds(2));
    std::cout << "Exiting concurrent thread.\n";
}
 
void threadCaller() 
{
    std::cout << "Starting thread caller.\n";
    std::thread t(independentThread);
    t.detach();
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::cout << "Exiting thread caller.\n";
}
 
int main() 
{
    threadCaller();
    std::this_thread::sleep_for(std::chrono::seconds(5));
}
```

## See also
- [join](/cpp/thread/thread/join/)
- [joinable](/cpp/thread/thread/joinable/)
- [C documentation](/c/thread/thrd_detach/)
