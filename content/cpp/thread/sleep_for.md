---
title: "std::this_thread::sleep_for"
source_path: "cpp/thread/sleep_for"
header: "<thread>"
category: "thread"
since: "C++11"
---

Blocks the execution of the current thread for at least the specified sleep_duration.

## Declarations
```cpp
template< class Rep, class Period >
void sleep_for( const std::chrono::duration<Rep, Period>& sleep_duration );
```
_(since C++11)_

## Parameters
- `sleep_duration`: time duration to sleep

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
int main()
{
    using namespace std::chrono_literals;
 
    std::cout << "Hello waiter\n" << std::flush;
 
    const auto start = std::chrono::high_resolution_clock::now();
    std::this_thread::sleep_for(2000ms);
    const auto end = std::chrono::high_resolution_clock::now();
    const std::chrono::duration<double, std::milli> elapsed = end - start;
 
    std::cout << "Waited " << elapsed << '\n';
}
```

## See also
- [sleep_until](/cpp/thread/sleep_until/)
