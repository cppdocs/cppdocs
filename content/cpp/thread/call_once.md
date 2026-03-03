---
title: "std::call_once"
source_path: "cpp/thread/call_once"
header: "<mutex>"
category: "thread"
since: "C++11"
---

Executes the [Callable](/cpp/named_req/callable/) object f exactly once, even if called concurrently from several threads.

## Declarations
```cpp
template< class Callable, class... Args >
void call_once( std::once_flag& flag, Callable&& f, Args&&... args );
```
_(since C++11)_

## Parameters
- `flag`: an object, for which exactly one function gets executed
- `f`: Callable object to invoke
- `args...`: arguments to pass to the function

## Return value
(none)

## Notes
If concurrent calls to std::call_once pass different functions f, it is unspecified which f will be called. The selected function runs in the same thread as the std::call_once invocation it was passed to.

Initialization of [function-local statics](/cpp/language/storage_duration/#Static_local_variables) is guaranteed to occur only once even when called from multiple threads, and may be more efficient than the equivalent code using std::call_once.

The POSIX equivalent of this function is [pthread_once](https://pubs.opengroup.org/onlinepubs/9699919799/functions/pthread_once.html).

## Example
```cpp
#include <iostream>
#include <mutex>
#include <thread>
 
std::once_flag flag1, flag2;
 
void simple_do_once()
{
    std::call_once(flag1, [](){ std::cout << "Simple example: called once\n"; });
}
 
void may_throw_function(bool do_throw)
{
    if (do_throw)
    {
        std::cout << "Throw: call_once will retry\n"; // this may appear more than once
        throw std::exception();
    }
    std::cout << "Did not throw, call_once will not attempt again\n"; // guaranteed once
}
 
void do_once(bool do_throw)
{
    try
    {
        std::call_once(flag2, may_throw_function, do_throw);
    }
    catch (...) {}
}
 
int main()
{
    std::thread st1(simple_do_once);
    std::thread st2(simple_do_once);
    std::thread st3(simple_do_once);
    std::thread st4(simple_do_once);
    st1.join();
    st2.join();
    st3.join();
    st4.join();
 
    std::thread t1(do_once, true);
    std::thread t2(do_once, true);
    std::thread t3(do_once, false);
    std::thread t4(do_once, true);
    t1.join();
    t2.join();
    t3.join();
    t4.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2080 | C++11 | std::invalid_argument would be thrown if f is invalid,but the scenario where f is invalidated is not specified | removed this error condition |
| LWG 2442 | C++11 | the arguments were copied and/or moved before invocation | no copying/moving is performed |

## See also
- [once_flag](/cpp/thread/once_flag/)
- [C documentation](/c/thread/ONCE_FLAG_INIT/)
