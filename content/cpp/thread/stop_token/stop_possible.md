---
title: "std::stop_token::stop_possible"
source_path: "cpp/thread/stop_token/stop_possible"
category: "thread"
since: "C++20"
---

Checks if the stop_token object has associated stop-state, and that state either has already had a stop requested or it has associated [std::stop_source](/cpp/thread/stop_source/) object(s).

## Declarations
```cpp
bool stop_possible() const noexcept;
```
_(since C++20)_

## Return value
false if the stop_token object has no associated stop-state, or it did not yet receive a stop request and there are no associated [std::stop_source](/cpp/thread/stop_source/) object(s); true otherwise.

## Notes
If the stop_token object has associated stop-state and a stop request has already been made, this function still returns true.

If the stop_token object has associated stop-state from a [std::jthread](/cpp/thread/jthread/)—for example, the stop_token was retrieved by invoking get_stop_token() on a [std::jthread](/cpp/thread/jthread/) object—then this function always returns true. A [std::jthread](/cpp/thread/jthread/) always has an internal [std::stop_source](/cpp/thread/stop_source/) object, even if the thread's invoking function does not check it.

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <format>
#include <iostream>
#include <mutex>
#include <string_view>
#include <thread>
using namespace std::chrono_literals;
 
int main()
{
    std::cout << std::boolalpha;
    auto print = [](std::string_view name, const std::stop_token& token)
    {
        std::cout << std::format("{}: stop_possible = {:s}, stop_requested = {:s}\n", 
            name, token.stop_possible(), token.stop_requested()
        );
    };
 
    // A worker thread that will listen to stop requests
    auto stop_worker = std::jthread([](std::stop_token stoken)
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
 
    // A worker thread that will only stop when completed
    auto inf_worker = std::jthread([]()
    {
        for (int i = 5; i; --i)
        {
            std::this_thread::sleep_for(300ms);
            std::cout << "  Run as long as we want\n";
        }
    });
 
    std::stop_token def_token;
    std::stop_token stop_token = stop_worker.get_stop_token();
    std::stop_token inf_token = inf_worker.get_stop_token();
    print("def_token ", def_token);
    print("stop_token", stop_token);
    print("inf_token ", inf_token);
 
    std::cout << "\nRequest and join stop_worker:\n";
    stop_worker.request_stop();
    stop_worker.join();
 
    std::cout << "\nRequest and join inf_worker:\n";
    inf_worker.request_stop();
    inf_worker.join();
    std::cout << '\n';
 
    print("def_token ", def_token);
    print("stop_token", stop_token);
    print("inf_token ", inf_token);
}
```
