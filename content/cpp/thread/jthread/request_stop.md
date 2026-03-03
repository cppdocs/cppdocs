---
title: "std::jthread::request_stop"
source_path: "cpp/thread/jthread/request_stop"
category: "thread"
since: "C++20"
---

Issues a stop request to the internal stop-state, if it has not yet already had stop requested.

## Declarations
```cpp
bool request_stop() noexcept;
```
_(since C++20)_

## Return value
true if this invocation made a stop request, otherwise false.

## Notes
If the request_stop() does issue a stop request (i.e., returns true), then any std::stop_callbacks registered for the same associated stop-state will be invoked synchronously, on the same thread request_stop() is issued on. If an invocation of a callback exits via an exception, [std::terminate](/cpp/error/terminate/) is called.

If a stop request has already been made, this function returns false. However there is no guarantee that another thread or [std::stop_source](/cpp/thread/stop_source/) object which has just (successfully) requested stop for the same stop-state is not still in the middle of invoking a [std::stop_callback](/cpp/thread/stop_callback/) function.

If the request_stop() does issue a stop request (i.e., returns true), then all condition variables of base type [std::condition_variable_any](/cpp/thread/condition_variable_any/) registered with an interruptible wait for [std::stop_token](/cpp/thread/stop_token/)s associated with the jthread's internal stop-state will be awoken.

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <thread>
 
using namespace std::chrono_literals;
 
// Helper function to quickly show which thread printed what
void print(auto txt)
{
    std::cout << std::this_thread::get_id() << ' ' << txt;
}
 
int main()
{
    // A sleepy worker thread
    std::jthread sleepy_worker(
        [](std::stop_token stoken)
        {
            for (int i = 10; i; --i)
            {
                std::this_thread::sleep_for(300ms);
                if (stoken.stop_requested())
                {
                    print("Sleepy worker is requested to stop\n");
                    return;
                }
                print("Sleepy worker goes back to sleep\n");
            }
        });
 
    // A waiting worker thread
    // The condition variable will be awoken by the stop request.
    std::jthread waiting_worker(
        [](std::stop_token stoken)
        {
            std::mutex mutex;
            std::unique_lock lock(mutex);
            std::condition_variable_any().wait(lock, stoken, []{ return false; });
            print("Waiting worker is requested to stop\n");
            return;
        });
 
    // Sleep this thread to give threads time to spin
    std::this_thread::sleep_for(400ms);
 
    // std::jthread::request_stop() can be called explicitly:
    print("Requesting stop of sleepy worker\n");
    sleepy_worker.request_stop();
    sleepy_worker.join();
    print("Sleepy worker joined\n");
 
    // Or automatically using RAII:
    // waiting_worker's destructor will call request_stop()
    // and join the thread automatically.
}
```
