---
title: "std::packaged_task<R(Args...)>::make_ready_at_thread_exit"
source_path: "cpp/thread/packaged_task/make_ready_at_thread_exit"
category: "thread"
since: "C++11"
---

Calls the stored task as if by [INVOKE<R>](/cpp/utility/functional/)(f, args...), where f is the stored task. The return value of the task or any exception thrown by it is stored in the shared state of *this.

## Declarations
```cpp
void make_ready_at_thread_exit( ArgTypes... args );
```
_(since C++11)_

## Parameters
- `args`: the parameters to pass on invocation of the stored task

## Return value
(none)

## Example
```cpp
#include <chrono>
#include <functional>
#include <future>
#include <iostream>
#include <memory>
#include <thread>
#include <utility>
 
struct ProgramState
{
    std::packaged_task<void()> task;
    std::future<void> future;
    std::thread worker;
};
 
static void worker(std::shared_ptr<ProgramState> state)
{
    state->task.make_ready_at_thread_exit(); // execute task right away
 
    auto status = state->future.wait_for(std::chrono::seconds(0));
    if (status == std::future_status::timeout)
        std::cout << "worker: future is not ready yet\n";
    else
        std::cout << "worker: future is ready\n";
 
    std::cout << "worker: exit\n";
}
 
static std::shared_ptr<ProgramState> create_state()
{
    auto state = std::make_shared<ProgramState>();
    state->task = std::packaged_task<void()>{[]
    {
        std::cout << "task: executed\n";
    }};
    state->future = state->task.get_future();
    state->worker = std::thread{worker, state};
    return state;
}
 
int main()
{
    auto state = create_state();
 
    state->worker.join();
    std::cout << "main: worker finished\n";
 
    auto status = state->future.wait_for(std::chrono::seconds(0));
    if (status == std::future_status::timeout)
        std::cout << "main: future is not ready yet\n";
    else
        std::cout << "main: future is ready\n";
}
```

## See also
- [operator()](/cpp/thread/packaged_task/operator/)
