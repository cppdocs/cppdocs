---
title: "std::condition_variable_any::notify_one"
source_path: "cpp/thread/condition_variable_any/notify_one"
category: "thread"
since: "C++11"
---

If any threads are waiting on *this, calling notify_one unblocks one of the waiting threads.

## Declarations
```cpp
void notify_one() noexcept;
```
_(since C++11)_

## Return value
(none)

## Notes
The effects of notify_one()/notify_all() and each of the three atomic parts of wait()/wait_for()/wait_until() (unlock+wait, wakeup, and lock) take place in a single total order that can be viewed as [modification order](/cpp/atomic/memory_order/#Modification_order) of an atomic variable: the order is specific to this individual condition variable. This makes it impossible for notify_one() to, for example, be delayed and unblock a thread that started waiting just after the call to notify_one() was made.

The notifying thread does not need to hold the lock on the same mutex as the one held by the waiting thread(s); in fact doing so is a pessimization, since the notified thread would immediately block again, waiting for the notifying thread to release the lock. However, some implementations (in particular many implementations of pthreads) recognize this situation and avoid this "hurry up and wait" scenario by transferring the waiting thread from the condition variable's queue directly to the queue of the mutex within the notify call, without waking it up.

Notifying while under the lock may nevertheless be necessary when precise scheduling of events is required, e.g. if the waiting thread would exit the program if the condition is satisfied, causing destruction of the notifying thread's condition variable. A spurious wakeup after mutex unlock but before notify would result in notify called on a destroyed object.

## Example
```cpp
#include <chrono>
#include <condition_variable>
#include <iostream>
#include <thread>
using namespace std::chrono_literals;
 
std::condition_variable_any cv;
std::mutex cv_m;
int i = 0;
bool done = false;
 
void waits()
{
    std::unique_lock<std::mutex> lk(cv_m);
    std::cout << "Waiting... \n";
    cv.wait(lk, []{ return i == 1; });
    std::cout << "...finished waiting; i == " << i << '\n';
    done = true;
}
 
void signals()
{
    std::this_thread::sleep_for(200ms);
    std::cout << "Notifying falsely...\n";
    cv.notify_one(); // waiting thread is notified with i == 0.
                     // cv.wait wakes up, checks i, and goes back to waiting
 
    std::unique_lock<std::mutex> lk(cv_m);
    i = 1;
    while (!done) 
    {
        std::cout << "Notifying true change...\n";
        lk.unlock();
        cv.notify_one(); // waiting thread is notified with i == 1, cv.wait returns
        std::this_thread::sleep_for(300ms);
        lk.lock();
    }
}
 
int main()
{
    std::thread t1(waits), t2(signals);
    t1.join(); 
    t2.join();
}
```

## See also
- [notify_all](/cpp/thread/condition_variable_any/notify_all/)
- [C documentation](/c/thread/cnd_signal/)
