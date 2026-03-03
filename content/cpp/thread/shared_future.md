---
title: "std::shared_future"
source_path: "cpp/thread/shared_future"
header: "<future>"
category: "thread"
since: "C++11"
---

The class template std::shared_future provides a mechanism to access the result of asynchronous operations, similar to [std::future](/cpp/thread/future/), except that multiple threads are allowed to wait for the same shared state. Unlike [std::future](/cpp/thread/future/), which is only moveable (so only one instance can refer to any particular asynchronous result), std::shared_future is copyable and multiple shared future objects may refer to the same shared state.

## Declarations
```cpp
template< class T > class shared_future;
```
_(since C++11)_

```cpp
template< class T > class shared_future<T&>;
```
_(since C++11)_

```cpp
template<> class shared_future<void>;
```
_(since C++11)_

## Example
```cpp
#include <chrono>
#include <future>
#include <iostream>
 
int main()
{   
    std::promise<void> ready_promise, t1_ready_promise, t2_ready_promise;
    std::shared_future<void> ready_future(ready_promise.get_future());
 
    std::chrono::time_point<std::chrono::high_resolution_clock> start;
 
    auto fun1 = [&, ready_future]() -> std::chrono::duration<double, std::milli> 
    {
        t1_ready_promise.set_value();
        ready_future.wait(); // waits for the signal from main()
        return std::chrono::high_resolution_clock::now() - start;
    };
 
 
    auto fun2 = [&, ready_future]() -> std::chrono::duration<double, std::milli> 
    {
        t2_ready_promise.set_value();
        ready_future.wait(); // waits for the signal from main()
        return std::chrono::high_resolution_clock::now() - start;
    };
 
    auto fut1 = t1_ready_promise.get_future();
    auto fut2 = t2_ready_promise.get_future();
 
    auto result1 = std::async(std::launch::async, fun1);
    auto result2 = std::async(std::launch::async, fun2);
 
    // wait for the threads to become ready
    fut1.wait();
    fut2.wait();
 
    // the threads are ready, start the clock
    start = std::chrono::high_resolution_clock::now();
 
    // signal the threads to go
    ready_promise.set_value();
 
    std::cout << "Thread 1 received the signal "
              << result1.get().count() << " ms after start\n"
              << "Thread 2 received the signal "
              << result2.get().count() << " ms after start\n";
}
```

## See also
- [async](/cpp/thread/async/)
- [std::future](/cpp/thread/future/)
- [future](/cpp/thread/future/)
