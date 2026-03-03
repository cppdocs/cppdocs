---
title: "std::stop_source"
source_path: "cpp/thread/stop_source"
header: "<stop_token>"
category: "thread"
since: "C++20"
---

The stop_source class provides the means to issue a stop request, such as for [std::jthread](/cpp/thread/jthread/) cancellation. A stop request made for one stop_source object is visible to all stop_sources and [std::stop_token](/cpp/thread/stop_token/)s of the same associated stop-state; any [std::stop_callback](/cpp/thread/stop_callback/)(s) registered for associated [std::stop_token](/cpp/thread/stop_token/)(s) will be invoked, and any [std::condition_variable_any](/cpp/thread/condition_variable_any/) objects waiting on associated [std::stop_token](/cpp/thread/stop_token/)(s) will be awoken.

## Declarations
```cpp
class stop_source;
```
_(since C++20)_

## Notes
For the purposes of [std::jthread](/cpp/thread/jthread/) cancellation the stop_source object should be retrieved from the [std::jthread](/cpp/thread/jthread/) object using [get_stop_source()](/cpp/thread/jthread/get_stop_source/); or stop should be requested directly from the [std::jthread](/cpp/thread/jthread/) object using [request_stop()](/cpp/thread/jthread/request_stop/). This will then use the same associated stop-state as that passed into the [std::jthread](/cpp/thread/jthread/)'s invoked function argument (i.e., the function being executed on its thread).

For other uses, however, a stop_source can be constructed separately using the default constructor, which creates new stop-state.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <stop_token>
#include <thread>
 
using namespace std::chrono_literals;
 
void worker_fun(int id, std::stop_token stoken)
{ 
    for (int i = 10; i; --i)
    {
        std::this_thread::sleep_for(300ms);
        if (stoken.stop_requested())
        {
            std::printf("  worker%d is requested to stop\n", id);
            return;
        }
        std::printf("  worker%d goes back to sleep\n", id);
    }
}
 
int main()
{
    std::jthread threads[4];
    std::cout << std::boolalpha;
    auto print = [](const std::stop_source& source)
    {
        std::printf("stop_source stop_possible = %s, stop_requested = %s\n",
                    source.stop_possible() ? "true" : "false",
                    source.stop_requested() ? "true" : "false");
    };
 
    // Common source
    std::stop_source stop_source;
 
    print(stop_source);
 
    // Create worker threads
    for (int i = 0; i < 4; ++i)
        threads[i] = std::jthread(worker_fun, i + 1, stop_source.get_token());
 
    std::this_thread::sleep_for(500ms);
 
    std::puts("Request stop");
    stop_source.request_stop();
 
    print(stop_source);
 
    // Note: destructor of jthreads will call join so no need for explicit calls
}
```
