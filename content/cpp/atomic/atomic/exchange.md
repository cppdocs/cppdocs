---
title: "std::atomic<T>::exchange"
source_path: "cpp/atomic/atomic/exchange"
category: "atomic"
since: "C++11"
---

Atomically replaces the underlying value with desired (a read-modify-write operation). Memory is affected according to the value of order.

## Declarations
```cpp
T exchange( T desired, std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

```cpp
T exchange( T desired, std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

## Parameters
- `desired`: value to assign
- `order`: memory order constraints to enforce

## Return value
The value of the atomic variable before the call.

## Example
```cpp
#include <algorithm>
#include <atomic>
#include <cstddef>
#include <iostream>
#include <syncstream>
#include <thread>
#include <vector>
 
int main()
{
    constexpr int thread_count{5};
    constexpr int sum{5};
 
    std::atomic<int> atom{0};
    std::atomic<int> counter{0};
 
    auto increment_to_sum = [&](const int id)
    {
        for (int next = 0; next < sum;)
        {
            // each thread is writing a value from its own knowledge
            const int current = atom.exchange(next);
            counter++;
            // sync writing to prevent from interrupting by other threads
            std::osyncstream(std::cout)
                << "Thread #" << id << " (id=" << std::this_thread::get_id()
                << ") wrote " << next << " replacing the old value "
                << current << ".\n";
            next = std::max(current, next) + 1;
        }
    };
 
    std::vector<std::thread> v;
    for (std::size_t i = 0; i < thread_count; ++i)
        v.emplace_back(increment_to_sum, i);
 
    for (auto& tr : v)
        tr.join();
 
    std::cout << thread_count << " threads take "
              << counter << " times in total to "
              << "increment 0 to " << sum << ".\n";
}
```

## See also
- [atomic_exchangeatomic_exchange_explicit](/cpp/atomic/atomic_exchange/)
- [exchange](/cpp/utility/exchange/)
