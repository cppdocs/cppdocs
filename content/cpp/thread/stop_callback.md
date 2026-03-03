---
title: "std::stop_callback"
source_path: "cpp/thread/stop_callback"
header: "<stop_token>"
category: "thread"
since: "C++20"
---

The stop_callback class template provides an RAII object type that registers a callback function for an associated [std::stop_token](/cpp/thread/stop_token/) object, such that the callback function will be invoked when the [std::stop_token](/cpp/thread/stop_token/)'s associated [std::stop_source](/cpp/thread/stop_source/) is requested to stop.

## Declarations
```cpp
template< class Callback >
class stop_callback;
```
_(since C++20)_

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <sstream>
#include <thread>
 
using namespace std::chrono_literals;
 
// Use a helper class for atomic std::cout streaming.
class Writer
{
    std::ostringstream buffer;
public:
    ~Writer()
    {
        std::cout << buffer.str();
    }
    Writer& operator<<(auto input)
    {
        buffer << input;
        return *this;
    }
};
 
int main()
{
    // A worker thread.
    // It will wait until it is requested to stop.
    std::jthread worker([] (std::stop_token stoken)
    {
        Writer() << "Worker thread's id: " << std::this_thread::get_id() << '\n';
        std::mutex mutex;
        std::unique_lock lock(mutex);
        std::condition_variable_any().wait(lock, stoken,
            [&stoken] { return stoken.stop_requested(); });
    });
 
    // Register a stop callback on the worker thread.
    std::stop_callback callback(worker.get_stop_token(), []
    {
        Writer() << "Stop callback executed by thread: "
            << std::this_thread::get_id() << '\n';
    });
 
    // Stop_callback objects can be destroyed prematurely to prevent execution.
    {
        std::stop_callback scoped_callback(worker.get_stop_token(), []
        {
            // This will not be executed.
            Writer() << "Scoped stop callback executed by thread: "
                << std::this_thread::get_id() << '\n';
        });
    }
 
    // Demonstrate which thread executes the stop_callback and when.
    // Define a stopper function.
    auto stopper_func = [&worker]
    {
        if (worker.request_stop())
            Writer() << "Stop request executed by thread: "
                << std::this_thread::get_id() << '\n';
        else
            Writer() << "Stop request not executed by thread: "
                << std::this_thread::get_id() << '\n';
    };
 
    // Let multiple threads compete for stopping the worker thread.
    std::jthread stopper1(stopper_func);
    std::jthread stopper2(stopper_func);
    stopper1.join();
    stopper2.join();
 
    // After a stop has already been requested,
    // a new stop_callback executes immediately.
    Writer() << "Main thread: " << std::this_thread::get_id() << '\n';
    std::stop_callback callback_after_stop(worker.get_stop_token(), []
    {
        Writer() << "Stop callback executed by thread: "
            << std::this_thread::get_id() << '\n';
    });
}
```
