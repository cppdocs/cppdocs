---
title: "std::condition_variable"
source_path: "cpp/thread/condition_variable"
header: "<condition_variable>"
category: "thread"
since: "C++11"
---

std::condition_variable is a synchronization primitive used with a [std::mutex](/cpp/thread/mutex/) to block one or more threads until another thread both modifies a shared variable (the condition) and notifies the std::condition_variable.

## Declarations
```cpp
class condition_variable;
```
_(since C++11)_

## Example
```cpp
#include <condition_variable>
#include <iostream>
#include <mutex>
#include <string>
#include <thread>
 
std::mutex m;
std::condition_variable cv;
std::string data;
bool ready = false;
bool processed = false;
 
void worker_thread()
{
    // wait until main() sends data
    std::unique_lock lk(m);
    cv.wait(lk, []{ return ready; });
 
    // after the wait, we own the lock
    std::cout << "Worker thread is processing data\n";
    data += " after processing";
 
    // send data back to main()
    processed = true;
    std::cout << "Worker thread signals data processing completed\n";
 
    // manual unlocking is done before notifying, to avoid waking up
    // the waiting thread only to block again (see notify_one for details)
    lk.unlock();
    cv.notify_one();
}
 
int main()
{
    std::thread worker(worker_thread);
 
    data = "Example data";
    // send data to the worker thread
    {
        std::lock_guard lk(m);
        ready = true;
        std::cout << "main() signals data ready for processing\n";
    }
    cv.notify_one();
 
    // wait for the worker
    {
        std::unique_lock lk(m);
        cv.wait(lk, []{ return processed; });
    }
    std::cout << "Back in main(), data = " << data << '\n';
 
    worker.join();
}
```

## See also
- [condition_variable_any](/cpp/thread/condition_variable_any/)
- [mutex](/cpp/thread/mutex/)
- [lock_guard](/cpp/thread/lock_guard/)
- [unique_lock](/cpp/thread/unique_lock/)
