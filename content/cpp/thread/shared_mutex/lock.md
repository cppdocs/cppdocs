---
title: "std::shared_mutex::lock"
source_path: "cpp/thread/shared_mutex/lock"
category: "thread"
since: "C++17"
---

Acquires an exclusive ownership of the shared_mutex. If another thread is holding an exclusive lock or a shared lock on the same shared_mutex the a call to lock will block execution until all such locks are released. While shared_mutex is locked in an exclusive mode, no other lock of any kind can also be held.

## Declarations
```cpp
void lock();
```
_(since C++17)_

## Return value
(none)

## Notes
lock() is usually not called directly: [std::unique_lock](/cpp/thread/unique_lock/), [std::scoped_lock](/cpp/thread/scoped_lock/), and [std::lock_guard](/cpp/thread/lock_guard/) are used to manage exclusive locking.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <mutex>
#include <shared_mutex>
#include <syncstream>
#include <thread>
#include <vector>
 
std::mutex stream_mutx;
void print(auto const& v)
{
    std::unique_lock<std::mutex> lock(stream_mutx);
    std::cout << std::this_thread::get_id() << " saw: ";
    for (auto e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    using namespace std::chrono_literals;
    constexpr int N_READERS = 5;
    constexpr int LAST = -999;
 
    std::shared_mutex smtx;
    int product = 0;
 
    auto writer = [&smtx, &product](int start, int end)
    {
        for (int i = start; i < end; ++i)
        {
            auto data = i;
            {
                std::unique_lock<std::shared_mutex> lock(smtx); // better than:
                                                                // smtx.lock();
                product = data;
            }
            std::this_thread::sleep_for(3ms);
        }
 
        smtx.lock(); // lock manually
        product = LAST;
        smtx.unlock();
    };
 
    auto reader = [&smtx, &product]
    {
        int data = 0;
        std::vector<int> seen;
        do
        {
            {
                // better to use:
                std::shared_lock lock(smtx); // smtx.lock_shared();
                data = product;
            }                                // smtx.unlock_shared();
 
            seen.push_back(data);
            std::this_thread::sleep_for(2ms);
        }
        while (data != LAST);
 
        print(seen);
    };
 
    std::vector<std::thread> threads;
    threads.emplace_back(writer, 1, 13);
    threads.emplace_back(writer, 42, 52);
 
    for (int i = 0; i < N_READERS; ++i)
        threads.emplace_back(reader);
 
    for (auto&& t : threads)
        t.join();
}
```

## See also
- [try_lock](/cpp/thread/shared_mutex/try_lock/)
- [unlock](/cpp/thread/shared_mutex/unlock/)
- [lock_shared](/cpp/thread/shared_mutex/lock_shared/)
