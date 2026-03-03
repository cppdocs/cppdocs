---
title: "std::mutex"
source_path: "cpp/thread/mutex"
header: "<mutex>"
category: "thread"
since: "C++11"
---

The mutex class is a synchronization primitive that can be used to protect shared data from being simultaneously accessed by multiple threads.

## Declarations
```cpp
class mutex;
```
_(since C++11)_

## Notes
std::mutex is usually not accessed directly: [std::unique_lock](/cpp/thread/unique_lock/), [std::lock_guard](/cpp/thread/lock_guard/), or [std::scoped_lock](/cpp/thread/scoped_lock/)(since C++17) manage locking in a more exception-safe manner.

## Example
```cpp
#include <chrono>
#include <iostream>
#include <map>
#include <mutex>
#include <string>
#include <thread>
 
std::map<std::string, std::string> g_pages;
std::mutex g_pages_mutex;
 
void save_page(const std::string& url)
{
    // simulate a long page fetch
    std::this_thread::sleep_for(std::chrono::seconds(2));
    std::string result = "fake content";
 
    std::lock_guard<std::mutex> guard(g_pages_mutex);
    g_pages[url] = result;
}
 
int main() 
{
    std::thread t1(save_page, "http://foo");
    std::thread t2(save_page, "http://bar");
    t1.join();
    t2.join();
 
    // safe to access g_pages without lock now, as the threads are joined
    for (const auto& [url, page] : g_pages)
        std::cout << url << " => " << page << '\n';
}
```

## See also
- [recursive_mutex](/cpp/thread/recursive_mutex/)
- [lock_guard](/cpp/thread/lock_guard/)
- [unique_lock](/cpp/thread/unique_lock/)
- [scoped_lock](/cpp/thread/scoped_lock/)
- [condition_variable](/cpp/thread/condition_variable/)
- [std::unique_lock](/cpp/thread/unique_lock/)
