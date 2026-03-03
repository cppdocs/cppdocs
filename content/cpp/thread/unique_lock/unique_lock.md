---
title: "std::unique_lock<Mutex>::unique_lock"
source_path: "cpp/thread/unique_lock/unique_lock"
category: "thread"
since: "C++11"
---

Constructs a unique_lock, optionally locking the supplied mutex.

## Declarations
```cpp
unique_lock() noexcept;
```
_(since C++11)_

```cpp
unique_lock( unique_lock&& other ) noexcept;
```
_(since C++11)_

```cpp
explicit unique_lock( mutex_type& m );
```
_(since C++11)_

```cpp
unique_lock( mutex_type& m, std::defer_lock_t t ) noexcept;
```
_(since C++11)_

```cpp
unique_lock( mutex_type& m, std::try_to_lock_t t );
```
_(since C++11)_

```cpp
unique_lock( mutex_type& m, std::adopt_lock_t t );
```
_(since C++11)_

```cpp
template< class Rep, class Period >
unique_lock( mutex_type& m,
const std::chrono::duration<Rep, Period>& timeout_duration );
```
_(since C++11)_

```cpp
template< class Clock, class Duration >
unique_lock( mutex_type& m,
const std::chrono::time_point<Clock, Duration>& timeout_time );
```
_(since C++11)_

## Parameters
- `other`: another unique_lock to initialize the state with
- `m`: mutex to associate with the lock and optionally acquire ownership of
- `t`: tag parameter used to select constructors with different locking strategies
- `timeout_duration`: maximum duration to block for
- `timeout_time`: maximum time point to block until

## Example
```cpp
#include <iostream>
#include <mutex>
#include <thread>
#include <utility>
#include <vector>
 
std::mutex m_a, m_b, m_c;
int a, b, c = 1;
 
void update()
{
    {   // Note: std::lock_guard or atomic<int> can be used instead
        std::unique_lock<std::mutex> lk(m_a);
        ++a;
    }
 
    {   // Note: see std::lock and std::scoped_lock for details and alternatives
        std::unique_lock<std::mutex> lk_b(m_b, std::defer_lock);
        std::unique_lock<std::mutex> lk_c(m_c, std::defer_lock);
        std::lock(lk_b, lk_c);
        b = std::exchange(c, b + c);
    }
}
 
int main()
{
    std::vector<std::thread> threads;
    for (unsigned i = 0; i < 12; ++i)
        threads.emplace_back(update);
 
    for (auto& i : threads)
        i.join();
 
    std::cout << a << "'th and " << a + 1 << "'th Fibonacci numbers: "
              << b << " and " << c << '\n';
}
```
