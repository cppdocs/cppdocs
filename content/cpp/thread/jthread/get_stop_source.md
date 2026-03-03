---
title: "std::jthread::get_stop_source"
source_path: "cpp/thread/jthread/get_stop_source"
category: "thread"
since: "C++20"
---

Returns a [std::stop_source](/cpp/thread/stop_source/) associated with the same shared stop-state as held internally by the jthread object.

## Declarations
```cpp
std::stop_source get_stop_source() noexcept;
```
_(since C++20)_

## Return value
A value of type [std::stop_source](/cpp/thread/stop_source/) associated with stop-state held internally by jthread object.

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <string_view>
#include <thread>
 
using namespace std::chrono_literals;
 
int main()
{
    std::cout << std::boolalpha;
    auto print = [](std::string_view name, const std::stop_source& source)
    {
        std::cout << name << ": stop_possible = " << source.stop_possible();
        std::cout << ", stop_requested = " << source.stop_requested() << '\n';
    };
 
    // A worker thread
    auto worker = std::jthread([](std::stop_token stoken)
    {
        for (int i = 10; i; --i)
        {
            std::this_thread::sleep_for(300ms);
            if (stoken.stop_requested())
            {
                std::cout << "  Sleepy worker is requested to stop\n";
                return;
            }
            std::cout << "  Sleepy worker goes back to sleep\n";
        }
    });
 
    std::stop_source stop_source = worker.get_stop_source();
    print("stop_source", stop_source);
 
    std::cout << "\nPass source to other thread:\n";
    auto stopper = std::thread(
        [](std::stop_source source)
        {
            std::this_thread::sleep_for(500ms);
            std::cout << "Request stop for worker via source\n";
            source.request_stop();
        },
        stop_source);
    stopper.join();
    std::this_thread::sleep_for(200ms);
    std::cout << '\n';
 
    print("stop_source", stop_source);
}
```
