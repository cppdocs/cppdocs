---
title: "std::future<T>::wait"
source_path: "cpp/thread/future/wait"
category: "thread"
since: "C++11"
---

Blocks until the result becomes available. valid() == true after the call.

## Declarations
```cpp
void wait() const;
```
_(since C++11)_

## Return value
(none)

## Notes
The implementations are encouraged to detect the case when valid() == false before the call and throw a [std::future_error](/cpp/thread/future_error/) with an error condition of [std::future_errc::no_state](/cpp/thread/future_errc/).

## Example
```cpp
#include <chrono>
#include <future>
#include <iostream>
#include <thread>
 
int fib(int n)
{
    if (n < 3)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}
 
int main()
{
    std::future<int> f1 = std::async(std::launch::async, []() { return fib(40); });
    std::future<int> f2 = std::async(std::launch::async, []() { return fib(43); });
 
    std::cout << "waiting... " << std::flush;
    const auto start = std::chrono::system_clock::now();
 
    f1.wait();
    f2.wait();
 
    const auto diff = std::chrono::system_clock::now() - start;
    std::cout << std::chrono::duration<double>(diff).count() << " seconds\n";
 
    std::cout << "f1: " << f1.get() << '\n';
    std::cout << "f2: " << f2.get() << '\n';
}
```

## See also
- [wait_for](/cpp/thread/future/wait_for/)
- [wait_until](/cpp/thread/future/wait_until/)
