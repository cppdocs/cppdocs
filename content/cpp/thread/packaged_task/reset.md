---
title: "std::packaged_task<R(Args...)>::reset"
source_path: "cpp/thread/packaged_task/reset"
category: "thread"
since: "C++11"
---

Resets the state abandoning the results of previous executions. New shared state is constructed.

## Declarations
```cpp
void reset();
```
_(since C++11)_

## Return value
(none)

## Example
```cpp
#include <cmath>
#include <future>
#include <iostream>
#include <thread>
 
int main()
{
    std::packaged_task<int(int,int)> task([](int a, int b)
    {
        return std::pow(a, b);
    });
    std::future<int> result = task.get_future();
    task(2, 9);
    std::cout << "2^9 = " << result.get() << '\n';
 
    task.reset();
    result = task.get_future();
    std::thread task_td(std::move(task), 2, 10);
    task_td.join();
    std::cout << "2^10 = " << result.get() << '\n';
}
```
