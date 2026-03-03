---
title: "std::promise<R>::set_exception"
source_path: "cpp/thread/promise/set_exception"
category: "thread"
since: "C++11"
---

Atomically stores the exception pointer p into the shared state and makes the state ready.

## Declarations
```cpp
void set_exception( std::exception_ptr p );
```
_(since C++11)_

## Parameters
- `p`: exception pointer to store. The behavior is undefined if p is null

## Return value
(none)

## Example
```cpp
#include <future>
#include <iostream>
#include <thread>
 
int main()
{
    std::promise<int> p;
    std::future<int> f = p.get_future();
 
    std::thread t([&p]
    {
        try
        {
            // code that may throw
            throw std::runtime_error("Example");
        }
        catch (...)
        {
            try
            {
                // store anything thrown in the promise
                p.set_exception(std::current_exception());
                // or throw a custom exception instead
                // p.set_exception(std::make_exception_ptr(MyException("mine")));
            }
            catch (...) {} // set_exception() may throw too
        }
    });
 
    try
    {
        std::cout << f.get();
    }
    catch (const std::exception& e)
    {
        std::cout << "Exception from the thread: " << e.what() << '\n';
    }
    t.join();
}
```

## See also
- [set_exception_at_thread_exit](/cpp/thread/promise/set_exception_at_thread_exit/)
