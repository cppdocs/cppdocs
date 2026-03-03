---
title: "Coroutines (C++20)"
source_path: "cpp/language/coroutines"
category: "language"
since: "C++20"
---

A coroutine is a function that can suspend execution to be resumed later. Coroutines are stackless: they suspend execution by returning to the caller, and the data that is required to resume execution is stored separately from the stack. This allows for sequential code that executes asynchronously (e.g. to handle non-blocking I/O without explicit callbacks), and also supports algorithms on lazy-computed infinite sequences and other uses.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_impl_coroutine
201902L
(C++20)
Coroutines (compiler support)
__cpp_lib_coroutine
201902L
(C++20)
Coroutines (library support)
__cpp_lib_generator
202207L
(C++23)
std::generator: synchronous coroutine generator for ranges

## Example
```cpp
#include <coroutine>
#include <iostream>
#include <stdexcept>
#include <thread>
 
auto switch_to_new_thread(std::jthread& out)
{
    struct awaitable
    {
        std::jthread* p_out;
        bool await_ready() { return false; }
        void await_suspend(std::coroutine_handle<> h)
        {
            std::jthread& out = *p_out;
            if (out.joinable())
                throw std::runtime_error("Output jthread parameter not empty");
            out = std::jthread([h] { h.resume(); });
            // Potential undefined behavior: accessing potentially destroyed *this
            // std::cout << "New thread ID: " << p_out->get_id() << '\n';
            std::cout << "New thread ID: " << out.get_id() << '\n'; // this is OK
        }
        void await_resume() {}
    };
    return awaitable{&out};
}
 
struct task
{
    struct promise_type
    {
        task get_return_object() { return {}; }
        std::suspend_never initial_suspend() { return {}; }
        std::suspend_never final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}
    };
};
 
task resuming_on_new_thread(std::jthread& out)
{
    std::cout << "Coroutine started on thread: " << std::this_thread::get_id() << '\n';
    co_await switch_to_new_thread(out);
    // awaiter destroyed here
    std::cout << "Coroutine resumed on thread: " << std::this_thread::get_id() << '\n';
}
 
int main()
{
    std::jthread out;
    resuming_on_new_thread(out);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2556 | C++20 | invalid return_void made the behavior offalling off the end of the coroutine undefined | the program is ill-formed in this case |
| CWG 2668 | C++20 | co_await could not appear in lambda expressions | allowed |
| CWG 2754 | C++23 | *this was taken when constructing the promiseobject for explicit object member functions | *this is nottaken in this case |

## See also
- [generator](/cpp/coroutine/generator/)
- [view](/cpp/ranges/view/)
