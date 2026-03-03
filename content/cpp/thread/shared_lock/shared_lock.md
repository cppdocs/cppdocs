---
title: "std::shared_lock<Mutex>::shared_lock"
source_path: "cpp/thread/shared_lock/shared_lock"
category: "thread"
since: "C++14"
---

Constructs a shared_lock, optionally locking the supplied mutex.

## Declarations
```cpp
shared_lock() noexcept;
```
_(since C++14)_

```cpp
shared_lock( shared_lock&& other ) noexcept;
```
_(since C++14)_

```cpp
explicit shared_lock( mutex_type& m );
```
_(since C++14)_

```cpp
shared_lock( mutex_type& m, std::defer_lock_t t ) noexcept;
```
_(since C++14)_

```cpp
shared_lock( mutex_type& m, std::try_to_lock_t t );
```
_(since C++14)_

```cpp
shared_lock( mutex_type& m, std::adopt_lock_t t );
```
_(since C++14)_

```cpp
template< class Rep, class Period >
shared_lock( mutex_type& m,
const std::chrono::duration<Rep,Period>& timeout_duration );
```
_(since C++14)_

```cpp
template< class Clock, class Duration >
shared_lock( mutex_type& m,
const std::chrono::time_point<Clock,Duration>& timeout_time );
```
_(since C++14)_

## Parameters
- `other`: another shared_lock to initialize the state with
- `m`: mutex to associate with the lock and optionally acquire ownership of
- `t`: tag parameter used to select constructors with different locking strategies
- `timeout_duration`: maximum duration to block for
- `timeout_time`: maximum time point to block until

## Example
```cpp
#include <chrono>
#include <iostream>
#include <shared_mutex>
#include <syncstream>
#include <thread>
 
std::shared_timed_mutex m;
int i = 10;
 
void read_shared_var(int id)
{
     // both the threads get access to the integer i
     std::shared_lock<std::shared_timed_mutex> slk(m);
     const int ii = i; // reads global i
 
     std::osyncstream(std::cout) << '#' << id << " read i as " << ii << "...\n";
     std::this_thread::sleep_for(std::chrono::milliseconds(10));
     std::osyncstream(std::cout) << '#' << id << " woke up..." << std::endl;
}
 
int main()
{
     std::thread r1{read_shared_var, 1};
     std::thread r2{read_shared_var, 2};
 
     r1.join();
     r2.join();
}
```
