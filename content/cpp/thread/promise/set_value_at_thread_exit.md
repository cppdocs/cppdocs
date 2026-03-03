---
title: "std::promise<R>::set_value_at_thread_exit"
source_path: "cpp/thread/promise/set_value_at_thread_exit"
category: "thread"
since: "C++11"
---

Stores the value into the shared state without making the state ready immediately. The state is made ready when the current thread exits, after all variables with thread-local storage duration have been destroyed.

## Declarations
```cpp
Main template
```

```cpp
void set_value_at_thread_exit( const R& value );
```
_(since C++11)_

```cpp
void set_value_at_thread_exit( R&& value );
```
_(since C++11)_

```cpp
std::promise<R&> specializations
```

```cpp
void set_value_at_thread_exit( R& value );
```
_(since C++11)_

```cpp
std::promise<void> specialization
```

```cpp
void set_value_at_thread_exit();
```
_(since C++11)_

## Parameters
- `value`: value to store in the shared state

## Return value
(none)

## Example
```cpp
#include <future>
#include <iostream>
#include <thread>
 
int main()
{
    using namespace std::chrono_literals;
    std::promise<int> p;
    std::future<int> f = p.get_future();
    std::thread([&p]
    {
        std::this_thread::sleep_for(1s);
        p.set_value_at_thread_exit(9);
    }).detach();
 
    std::cout << "Waiting... " << std::flush;
    f.wait();
    std::cout << "Done!\nResult is: " << f.get() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2098 | C++11 | it was unclear which exceptions are required to be thrown | made clear |

## See also
- [set_value](/cpp/thread/promise/set_value/)
- [set_exception_at_thread_exit](/cpp/thread/promise/set_exception_at_thread_exit/)
