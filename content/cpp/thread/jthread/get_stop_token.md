---
title: "std::jthread::get_stop_token"
source_path: "cpp/thread/jthread/get_stop_token"
category: "thread"
since: "C++20"
---

Returns a [std::stop_token](/cpp/thread/stop_token/) associated with the same shared stop-state held internally by the jthread object.

## Declarations
```cpp
std::stop_token get_stop_token() const noexcept;
```
_(since C++20)_

## Return value
A value of type [std::stop_token](/cpp/thread/stop_token/) associated with stop-state held internally by jthread object.

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <string_view>
#include <thread>
 
using namespace std::chrono_literals;
 
void print(std::string_view name, const std::stop_token& token)
{
    std::cout << name << ": stop_possible = " << token.stop_possible();
    std::cout << ", stop_requested = " << token.stop_requested() << '\n';
}
 
void finite_sleepy(std::stop_token stoken)
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
}
 
void infinite_sleepy()
{
    for (int i = 5; i; --i)
    {
        std::this_thread::sleep_for(300ms);
        std::cout << "  Run as long as we want\n";
    }
}
 
 
int main()
{
    std::cout << std::boolalpha;
 
    // A worker thread that will listen to stop requests
    std::jthread stop_worker(finite_sleepy);
 
    // A worker thread that will only stop when completed
    std::jthread inf_worker(infinite_sleepy);
 
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
