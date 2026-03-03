---
title: "std::future<T>::wait_until"
source_path: "cpp/thread/future/wait_until"
category: "thread"
since: "C++11"
---

wait_until waits for a result to become available. It blocks until specified timeout_time has been reached or the result becomes available, whichever comes first. The return value indicates why wait_until returned.

## Declarations
```cpp
template< class Clock, class Duration >
std::future_status wait_until( const std::chrono::time_point<Clock,Duration>& timeout_time ) const;
```
_(since C++11)_

## Parameters
- `timeout_time`: maximum time point to block until

## Notes
The implementations are encouraged to detect the case when valid() == false before the call and throw a [std::future_error](/cpp/thread/future_error/) with an error condition of [future_errc::no_state](/cpp/thread/future_errc/).

The standard recommends that the clock tied to timeout_time be used to measure time; that clock is not required to be a monotonic clock. There are no guarantees regarding the behavior of this function if the clock is adjusted discontinuously, but the existing implementations convert timeout_time from Clock to [std::chrono::system_clock](/cpp/chrono/system_clock/) and delegate to POSIX [pthread_cond_timedwait](https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_cond_timedwait.html) so that the wait honors adjustments to the system clock, but not to the user-provided Clock. In any case, the function also may wait for longer than until after timeout_time has been reached due to scheduling or resource contention delays.

## Example
```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <thread>
 
int main()
{
    std::chrono::system_clock::time_point two_seconds_passed
        = std::chrono::system_clock::now() + std::chrono::seconds(2);
 
    // Make a future that takes 1 second to complete
    std::promise<int> p1;
    std::future<int> f_completes = p1.get_future();
    std::thread([](std::promise<int> p1)
                { 
                    std::this_thread::sleep_for(std::chrono::seconds(1)); 
                    p1.set_value_at_thread_exit(9); 
                }, 
                std::move(p1)
    ).detach();
 
    // Make a future that takes 5 seconds to complete
    std::promise<int> p2;
    std::future<int> f_times_out = p2.get_future();
    std::thread([](std::promise<int> p2)
                { 
                    std::this_thread::sleep_for(std::chrono::seconds(5)); 
                    p2.set_value_at_thread_exit(8); 
                }, 
                std::move(p2)
    ).detach();
 
    std::cout << "Waiting for 2 seconds..." << std::endl;
 
    if (std::future_status::ready == f_completes.wait_until(two_seconds_passed))
        std::cout << "f_completes: " << f_completes.get() << "\n";
    else
        std::cout << "f_completes did not complete!\n";
 
    if (std::future_status::ready == f_times_out.wait_until(two_seconds_passed))
        std::cout << "f_times_out: " << f_times_out.get() << "\n";
    else
        std::cout << "f_times_out did not complete!\n";
 
    std::cout << "Done!\n";
}
```

## See also
- [wait](/cpp/thread/future/wait/)
- [wait_for](/cpp/thread/future/wait_for/)
