---
title: "std::unique_lock<Mutex>::swap"
source_path: "cpp/thread/unique_lock/swap"
category: "thread"
since: "C++11"
---

Exchanges the internal states of the lock objects.

## Declarations
```cpp
void swap( unique_lock& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: the lock to swap the state with

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <mutex>
 
int main()
{
    std::mutex mtx1;
    std::unique_lock<std::mutex> guard1(mtx1);
    std::unique_lock<std::mutex> guard2;
    guard2.swap(guard1);
 
    if (!guard1 && guard2)
        std::cout << "swapped success\n";
 
    return 0;
}
```

## See also
- [std::swap(std::unique_lock)](/cpp/thread/unique_lock/swap2/)
- [std::swap](/cpp/utility/swap/)
