---
title: "std::packaged_task"
source_path: "cpp/thread/packaged_task"
header: "<future>"
category: "thread"
since: "C++11"
---

The class template std::packaged_task wraps any [Callable](/cpp/named_req/callable/) target (function, lambda expression, bind expression, or another function object) so that it can be invoked asynchronously. Its return value or exception thrown is stored in a shared state which can be accessed through [std::future](/cpp/thread/future/) objects.

## Declarations
```cpp
template< class > class packaged_task; //not defined
```
_(since C++11)_

```cpp
template< class R, class ...ArgTypes >
class packaged_task<R(ArgTypes...)>;
```
_(since C++11)_

## Example
```cpp
#include <cmath>
#include <functional>
#include <future>
#include <iostream>
#include <thread>
 
// unique function to avoid disambiguating the std::pow overload set
int f(int x, int y) { return std::pow(x, y); }
 
void task_lambda()
{
    std::packaged_task<int(int, int)> task([](int a, int b)
    {
        return std::pow(a, b); 
    });
    std::future<int> result = task.get_future();
 
    task(2, 9);
 
    std::cout << "task_lambda:\t" << result.get() << '\n';
}
 
void task_bind()
{
    std::packaged_task<int()> task(std::bind(f, 2, 11));
    std::future<int> result = task.get_future();
 
    task();
 
    std::cout << "task_bind:\t" << result.get() << '\n';
}
 
void task_thread()
{
    std::packaged_task<int(int, int)> task(f);
    std::future<int> result = task.get_future();
 
    std::thread task_td(std::move(task), 2, 10);
    task_td.join();
 
    std::cout << "task_thread:\t" << result.get() << '\n';
}
 
int main()
{
    task_lambda();
    task_bind();
    task_thread();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3117 | C++17 | deduction guides for packaged_task were missing | added |

## See also
- [future](/cpp/thread/future/)
