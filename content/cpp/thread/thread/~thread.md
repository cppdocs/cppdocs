---
title: "std::thread::~thread"
source_path: "cpp/thread/thread/~thread"
category: "thread"
since: "C++11"
---

Destroys the thread object.

## Declarations
```cpp
~thread();
```
_(since C++11)_

## Notes
A thread object does not have an associated thread (and is safe to destroy) after

## Example
```cpp
#include <thread>
using namespace std::chrono_literals;
 
int main()
{
    auto bleah = std::thread{[]{ std::this_thread::sleep_for(13ms); }};
 
}   // ~thread calls std::terminate()
```

## See also
- [(destructor)](/cpp/thread/jthread/~jthread/)
