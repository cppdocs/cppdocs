---
title: "std::this_thread::get_id"
source_path: "cpp/thread/get_id"
header: "<thread>"
category: "thread"
since: "C++11"
---

Returns the id of the current thread.

## Declarations
```cpp
std::thread::id get_id() noexcept;
```
_(since C++11)_

## Return value
id of the current thread.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <syncstream>
#include <thread>
using namespace std::chrono_literals;
 
void foo()
{
    std::thread::id this_id = std::this_thread::get_id();
 
    std::osyncstream(std::cout) << "thread " << this_id << " sleeping...\n";
 
    std::this_thread::sleep_for(500ms);
}
 
int main()
{
    std::jthread t1{foo};
    std::jthread t2{foo};
}
```

## See also
- [get_id](/cpp/thread/thread/get_id/)
- [C documentation](/c/thread/thrd_current/)
