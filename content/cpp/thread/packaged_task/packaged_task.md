---
title: "std::packaged_task<R(Args...)>::packaged_task"
source_path: "cpp/thread/packaged_task/packaged_task"
category: "thread"
since: "C++11"
---

Constructs a new std::packaged_task object.

## Declarations
```cpp
packaged_task() noexcept;
```
_(since C++11)_

```cpp
template< class F >
explicit packaged_task( F&& f );
```
_(since C++11)_

```cpp
template< class F, class Allocator >
explicit packaged_task( std::allocator_arg_t, const Allocator& a, F&& f );
```
_(since C++11) (until C++17)_

```cpp
packaged_task( const packaged_task& ) = delete;
```
_(since C++11)_

```cpp
packaged_task( packaged_task&& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `f`: the callable target (function, member function, lambda expression, function object) to execute
- `a`: the allocator to use when storing the task
- `rhs`: the std::packaged_task to move from

## Example
```cpp
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
    std::packaged_task<int(int)> fib_task(&fib); 
 
    std::cout << "Starting task\n";
    auto result = fib_task.get_future();
    std::thread t(std::move(fib_task), 42);
 
    std::cout << "Waiting for task to finish..." << std::endl;
    std::cout << result.get() << '\n';
 
    std::cout << "Task complete\n";
    t.join();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2067 | C++11 | the parameter type of the copy constructor was packaged_task& | added const |
| LWG 2097 | C++11 | for overloads (2,3), F could be std::packaged_task<R(Args...)> | F is constrained |
