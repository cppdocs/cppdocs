---
title: "std::mutex::try_lock"
source_path: "cpp/thread/mutex/try_lock"
category: "thread"
since: "C++11"
---

Tries to lock the mutex. Returns immediately. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
bool try_lock();
```
_(since C++11)_

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
```cpp
#include <chrono>
#include <iostream> // std::cout
#include <mutex>
#include <thread>
 
std::chrono::milliseconds interval(100);
 
std::mutex mutex;
int job_shared = 0; // both threads can modify 'job_shared',
                    // mutex will protect this variable
 
int job_exclusive = 0; // only one thread can modify 'job_exclusive'
                       // no protection needed
 
// this thread can modify both 'job_shared' and 'job_exclusive'
void job_1() 
{
    std::this_thread::sleep_for(interval); // let 'job_2' take a lock
 
    while (true)
    {
        // try to lock mutex to modify 'job_shared'
        if (mutex.try_lock())
        {
            std::cout << "job shared (" << job_shared << ")\n";
            mutex.unlock();
            return;
        }
        else
        {
            // can't get lock to modify 'job_shared'
            // but there is some other work to do
            ++job_exclusive;
            std::cout << "job exclusive (" << job_exclusive << ")\n";
            std::this_thread::sleep_for(interval);
        }
    }
}
 
// this thread can modify only 'job_shared'
void job_2() 
{
    mutex.lock();
    std::this_thread::sleep_for(5 * interval);
    ++job_shared;
    mutex.unlock();
}
 
int main() 
{
    std::thread thread_1(job_1);
    std::thread thread_2(job_2);
 
    thread_1.join();
    thread_2.join();
}
```

## See also
- [lock](/cpp/thread/mutex/lock/)
- [unlock](/cpp/thread/mutex/unlock/)
- [C documentation](/c/thread/mtx_trylock/)
