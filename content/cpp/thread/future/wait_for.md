---
title: "std::future<T>::wait_for"
source_path: "cpp/thread/future/wait_for"
category: "thread"
since: "C++11"
---

Waits for the result to become available. Blocks until specified timeout_duration has elapsed or the result becomes available, whichever comes first. The return value identifies the state of the result.

## Declarations
```cpp
template< class Rep, class Period >
std::future_status wait_for( const std::chrono::duration<Rep,Period>& timeout_duration ) const;
```
_(since C++11)_

## Parameters
- `timeout_duration`: maximum duration to block for

## Notes
The implementations are encouraged to detect the case when valid == false before the call and throw a [std::future_error](/cpp/thread/future_error/) with an error condition of [std::future_errc::no_state](/cpp/thread/future_errc/).

## Example
```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <thread>
using namespace std::chrono_literals;
 
int main()
{
    std::future<int> future = std::async(std::launch::async, []()
    {
        std::this_thread::sleep_for(3s);
        return 8;
    });
 
    std::cout << "waiting...\n";
    std::future_status status;
 
    do
    {
        switch (status = future.wait_for(1s); status)
        {
            case std::future_status::deferred:
                std::cout << "deferred\n";
                break;
            case std::future_status::timeout:
                std::cout << "timeout\n";
                break;
            case std::future_status::ready:
                std::cout << "ready!\n";
                break;
        }
    }
    while (status != std::future_status::ready);
 
    std::cout << "result is " << future.get() << '\n';
}
```

## See also
- [wait](/cpp/thread/future/wait/)
- [wait_until](/cpp/thread/future/wait_until/)
