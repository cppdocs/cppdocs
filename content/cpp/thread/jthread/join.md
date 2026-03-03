---
title: "std::jthread::join"
source_path: "cpp/thread/jthread/join"
category: "thread"
since: "C++20"
---

Blocks the current thread until the thread identified by *this finishes its execution.

## Declarations
```cpp
void join();
```
_(since C++20)_

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
void foo()
{
    // simulate expensive operation
    std::this_thread::sleep_for(std::chrono::seconds(1));
}
 
void bar()
{
    // simulate expensive operation
    std::this_thread::sleep_for(std::chrono::seconds(1));
}
 
int main()
{
    std::cout << "starting first helper...\n";
    std::jthread helper1(foo);
 
    std::cout << "starting second helper...\n";
    std::jthread helper2(bar);
 
    std::cout << "waiting for helpers to finish..." << std::endl;
    helper1.join();
    helper2.join();
 
    std::cout << "done!\n";
}
```

## See also
- [detach](/cpp/thread/jthread/detach/)
- [joinable](/cpp/thread/jthread/joinable/)
- [C documentation](/c/thread/thrd_join/)
