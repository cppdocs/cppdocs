---
title: "std::atomic_flag"
source_path: "cpp/atomic/atomic_flag"
header: "<atomic>"
---

std::atomic_flag is an atomic boolean type. Unlike all specializations of [std::atomic](/cpp/atomic/atomic/), it is guaranteed to be lock-free. Unlike [std::atomic](/cpp/atomic/atomic/)<bool>, std::atomic_flag does not provide load or store operations.

## Declarations
```cpp
class atomic_flag;
```
_(since C++11)_

## Example
```cpp
#include <atomic>
#include <iostream>
#include <mutex>
#include <thread>
#include <vector>
 
class mutex
{
    std::atomic_flag m_{};
 
  public:
    void lock() noexcept
    {
        while (m_.test_and_set(std::memory_order_acquire))
#if defined(__cpp_lib_atomic_wait) && __cpp_lib_atomic_wait >= 201907L
            // Since C++20, locks can be acquired only after notification in the unlock,
            // avoiding any unnecessary spinning.
            // Note that even though wait guarantees it returns only after the value has
            // changed, the lock is acquired after the next condition check.
            m_.wait(true, std::memory_order_relaxed)
#endif
                ;
    }
    bool try_lock() noexcept
    {
        return !m_.test_and_set(std::memory_order_acquire);
    }
    void unlock() noexcept
    {
        m_.clear(std::memory_order_release);
#if defined(__cpp_lib_atomic_wait) && __cpp_lib_atomic_wait >= 201907L
        m_.notify_one();
#endif
    }
};
 
static mutex m;
 
static int out{};
 
void f(std::size_t n)
{
    for (std::size_t cnt{}; cnt < 40; ++cnt)
    {
        std::lock_guard lock{m};
        std::cout << n << ((++out % 40) == 0 ? '\n' : ' ');
    }
}
 
int main()
{
    std::vector<std::thread> v;
    for (std::size_t n{}; n < 10; ++n)
        v.emplace_back(f, n);
    for (auto &t : v)
        t.join();
}
```

## See also
- [atomic_flag_test_and_setatomic_flag_test_and_set_explicit](/cpp/atomic/atomic_flag_test_and_set/)
- [atomic_flag_clearatomic_flag_clear_explicit](/cpp/atomic/atomic_flag_clear/)
- [atomic_flag_waitatomic_flag_wait_explicit](/cpp/atomic/atomic_flag_wait/)
- [atomic_flag_notify_one](/cpp/atomic/atomic_flag_notify_one/)
- [atomic_flag_notify_all](/cpp/atomic/atomic_flag_notify_all/)
- [ATOMIC_FLAG_INIT](/cpp/atomic/ATOMIC_FLAG_INIT/)
- [C documentation](/c/atomic/atomic_flag/)
