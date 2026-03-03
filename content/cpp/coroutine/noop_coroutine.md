---
title: "std::noop_coroutine"
source_path: "cpp/coroutine/noop_coroutine"
header: "<coroutine>"
category: "coroutine"
since: "C++20"
---

Returns a coroutine handle referring to a no-op coroutine.

## Declarations
```cpp
std::noop_coroutine_handle noop_coroutine() noexcept;
```
_(since C++20)_

## Return value
A [std::noop_coroutine_handle](/cpp/coroutine/coroutine_handle/) referring to a no-op coroutine.

## Notes
Return values from different calls to noop_coroutine may and may not compare equal.

noop_coroutine may only return a noop_coroutine_handle referring to a coroutine state object without starting a coroutine.

## Example
```cpp
#include <coroutine>
#include <iostream>
#include <utility>
 
template<class T>
struct task
{
    struct promise_type
    {
        auto get_return_object()
        {
            return task(std::coroutine_handle<promise_type>::from_promise(*this));
        }
        std::suspend_always initial_suspend() { return {}; }
        struct final_awaiter
        {
            bool await_ready() noexcept { return false; }
            void await_resume() noexcept {}
            std::coroutine_handle<>
                await_suspend(std::coroutine_handle<promise_type> h) noexcept
            {
                // final_awaiter::await_suspend is called when the execution of the
                // current coroutine (referred to by 'h') is about to finish.
                // If the current coroutine was resumed by another coroutine via
                // co_await get_task(), a handle to that coroutine has been stored
                // as h.promise().previous. In that case, return the handle to resume
                // the previous coroutine.
                // Otherwise, return noop_coroutine(), whose resumption does nothing.
 
                if (auto previous = h.promise().previous; previous)
                    return previous;
                else
                    return std::noop_coroutine();
            }
        };
        final_awaiter final_suspend() noexcept { return {}; }
        void unhandled_exception() { throw; }
        void return_value(T value) { result = std::move(value); }
 
        T result;
        std::coroutine_handle<> previous;
    };
 
    task(std::coroutine_handle<promise_type> h) : coro(h) {}
    task(task&& t) = delete;
    ~task() { coro.destroy(); }
 
    struct awaiter
    {
        bool await_ready() { return false; }
        T await_resume() { return std::move(coro.promise().result); }
        auto await_suspend(std::coroutine_handle<> h)
        {
            coro.promise().previous = h;
            return coro;
        }
        std::coroutine_handle<promise_type> coro;
    };
    awaiter operator co_await() { return awaiter{coro}; }
    T operator()()
    {
        coro.resume();
        return std::move(coro.promise().result);
    }
 
private:
    std::coroutine_handle<promise_type> coro;
};
 
task<int> get_random()
{
    std::cout << "in get_random()\n";
    co_return 4;
}
 
task<int> test()
{
    task<int> v = get_random();
    task<int> u = get_random();
    std::cout << "in test()\n";
    int x = (co_await v + co_await u);
    co_return x;
}
 
int main()
{
    task<int> t = test();
    int result = t();
    std::cout << result << '\n';
}
```

## See also
- [noop_coroutine_promise](/cpp/coroutine/noop_coroutine_promise/)
- [noop_coroutine_handle](/cpp/coroutine/coroutine_handle/)
- [std::coroutine_handle](/cpp/coroutine/coroutine_handle/)
- [std::noop_coroutine_promise](/cpp/coroutine/noop_coroutine_promise/)
