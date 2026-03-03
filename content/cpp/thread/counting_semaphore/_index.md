---
title: "std::counting_semaphore, std::binary_semaphore"
source_path: "cpp/thread/counting_semaphore"
header: "<semaphore>"
category: "thread"
since: "C++20"
---

1) A counting_semaphore is a lightweight synchronization primitive that can control access to a shared resource. Unlike a [std::mutex](/cpp/thread/mutex/), a counting_semaphore allows more than one concurrent access to the same resource, for at least LeastMaxValue concurrent accessors. The program is ill-formed if LeastMaxValue is negative.

## Declarations
```cpp
template< std::ptrdiff_t LeastMaxValue = /* implementation-defined */ >
class counting_semaphore;
```
_(since C++20)_

```cpp
using binary_semaphore = std::counting_semaphore<1>;
```
_(since C++20)_

## Notes
As its name indicates, the LeastMaxValue is the minimum max value, not the actual max value. Thus max() can yield a number larger than LeastMaxValue.

Unlike [std::mutex](/cpp/thread/mutex/) a counting_semaphore is not tied to threads of execution - acquiring a semaphore can occur on a different thread than releasing the semaphore, for example. All operations on counting_semaphore can be performed concurrently and without any relation to specific threads of execution, with the exception of the destructor which cannot be performed concurrently but can be performed on a different thread.

Semaphores are also often used for the semantics of signaling/notifying rather than mutual exclusion, by initializing the semaphore with 0 and thus blocking the receiver(s) that try to acquire(), until the notifier "signals" by invoking release(n). In this respect semaphores can be considered alternatives to [std::condition_variable](/cpp/thread/condition_variable/)s, often with better performance.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <semaphore>
#include <thread>
 
// global binary semaphore instances
// object counts are set to zero
// objects are in non-signaled state
std::binary_semaphore
    smphSignalMainToThread{0},
    smphSignalThreadToMain{0};
 
void ThreadProc()
{
    // wait for a signal from the main proc
    // by attempting to decrement the semaphore
    smphSignalMainToThread.acquire();
 
    // this call blocks until the semaphore's count
    // is increased from the main proc
 
    std::cout << "[thread] Got the signal\n"; // response message
 
    // wait for 3 seconds to imitate some work
    // being done by the thread
    using namespace std::literals;
    std::this_thread::sleep_for(3s);
 
    std::cout << "[thread] Send the signal\n"; // message
 
    // signal the main proc back
    smphSignalThreadToMain.release();
}
 
int main()
{
    // create some worker thread
    std::thread thrWorker(ThreadProc);
 
    std::cout << "[main] Send the signal\n"; // message
 
    // signal the worker thread to start working
    // by increasing the semaphore's count
    smphSignalMainToThread.release();
 
    // wait until the worker thread is done doing the work
    // by attempting to decrement the semaphore's count
    smphSignalThreadToMain.acquire();
 
    std::cout << "[main] Got the signal\n"; // response message
    thrWorker.join();
}
```
