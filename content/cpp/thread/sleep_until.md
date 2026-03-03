---
title: "std::this_thread::sleep_until"
source_path: "cpp/thread/sleep_until"
header: "<thread>"
category: "thread"
since: "C++11"
---

Blocks the execution of the current thread until specified sleep_time has been reached.

## Declarations
```cpp
template< class Clock, class Duration >
void sleep_until( const std::chrono::time_point<Clock, Duration>& sleep_time );
```
_(since C++11)_

## Parameters
- `sleep_time`: time to block until

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
 
auto now() { return std::chrono::steady_clock::now(); }
 
auto awake_time()
{
    using std::chrono::operator""ms;
    return now() + 2000ms;
}
 
int main()
{
    std::cout << "Hello, waiter...\n" << std::flush;
    const auto start{now()};
    std::this_thread::sleep_until(awake_time());
    std::chrono::duration<double, std::milli> elapsed{now() - start};
    std::cout << "Waited " << elapsed.count() << " ms\n";
}
```

## See also
- [sleep_for](/cpp/thread/sleep_for/)
- [C documentation](/c/thread/thrd_sleep/)
