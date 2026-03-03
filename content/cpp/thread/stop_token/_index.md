---
title: "std::stop_token"
source_path: "cpp/thread/stop_token"
header: "<stop_token>"
category: "thread"
since: "C++20"
---

The stop_token class provides the means to check if a stop request has been made or can be made, for its associated [std::stop_source](/cpp/thread/stop_source/) object. It is essentially a thread-safe "view" of the associated stop-state.

## Declarations
```cpp
class stop_token;
```
_(since C++20)_

## Notes
A stop_token object is not generally constructed independently, but rather retrieved from a [std::jthread](/cpp/thread/jthread/) or [std::stop_source](/cpp/thread/stop_source/). This makes it share the same associated stop-state as the [std::jthread](/cpp/thread/jthread/) or [std::stop_source](/cpp/thread/stop_source/).

## Example
```cpp
#include <iostream>
#include <thread>
 
using namespace std::literals::chrono_literals;
 
void f(std::stop_token stop_token, int value)
{
    while (!stop_token.stop_requested())
    {
        std::cout << value++ << ' ' << std::flush;
        std::this_thread::sleep_for(200ms);
    }
    std::cout << std::endl;
}
 
int main()
{
    std::jthread thread(f, 5); // prints 5 6 7 8... for approximately 3 seconds
    std::this_thread::sleep_for(3s);
    // The destructor of jthread calls request_stop() and join().
}
```
