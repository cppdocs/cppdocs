---
title: "std::hash<std::thread::id>"
source_path: "cpp/thread/thread/id/hash"
header: "<thread>"
category: "thread"
since: "C++11"
---

The template specialization of [std::hash](/cpp/utility/hash/) for the [std::thread::id](/cpp/thread/thread/id/) class allows users to obtain hashes of the identifiers of threads.

## Declarations
```cpp
template<> struct hash<std::thread::id>;
```
_(since C++11)_

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
#include <vector>
using namespace std::chrono_literals;
 
void foo()
{
    std::this_thread::sleep_for(10ms);
}
 
int main()
{
    std::vector<std::thread> v;
    for (int n = 0; n < 4; ++n)
        v.emplace_back(foo);
 
    std::hash<std::thread::id> hasher;
    for (auto& t : v)
    {
        std::cout << "thread " << t.get_id() << " hashes to "
                  << hasher(t.get_id()) << '\n';
        t.join();
    }
}
```

## See also
- [hash](/cpp/utility/hash/)
