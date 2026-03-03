---
title: "std::shared_mutex::lock_shared"
source_path: "cpp/thread/shared_mutex/lock_shared"
category: "thread"
since: "C++17"
---

Acquires shared ownership of the mutex. If another thread is holding the mutex in exclusive ownership, a call to lock_shared will block execution until shared ownership can be acquired.

## Declarations
```cpp
void lock_shared();
```
_(since C++17)_

## Return value
(none)

## Notes
lock_shared() is usually not called directly: [std::shared_lock](/cpp/thread/shared_lock/) is used to manage shared locking.

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
void print(auto v)
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
                std::unique_lock<std::shared_mutex> lock(smtx);
                product = data;
            } 
            std::this_thread::sleep_for(3ms);
        }
 
        smtx.lock(); // lock manually
        product = LAST;
        smtx.unlock();
    };
 
    auto reader = [&smtx, &product]()
    {
        int data = 0;
        std::vector<int> seen;
        do
        {
            {
                smtx.lock_shared(); // better to use: std::shared_lock lock(smtx);
                data = product;
                smtx.unlock_shared();
            }                                   
 
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
- [lock](/cpp/thread/shared_mutex/lock/)
- [try_lock_shared](/cpp/thread/shared_mutex/try_lock_shared/)
- [unlock_shared](/cpp/thread/shared_mutex/unlock_shared/)
