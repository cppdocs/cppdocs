---
title: "std::recursive_mutex::try_lock"
source_path: "cpp/thread/recursive_mutex/try_lock"
category: "thread"
since: "C++11"
---

Tries to lock the mutex. Returns immediately. On successful lock acquisition returns true, otherwise returns false.

## Declarations
```cpp
bool try_lock() noexcept;
```
_(since C++11)_

## Return value
true if the lock was acquired successfully, otherwise false.

## Example
```cpp
#include <iostream>
#include <mutex>
 
int main()
{
    std::recursive_mutex test;
    if (test.try_lock())
    {
        std::cout << "lock acquired\n";
        test.unlock();
    }
    else
        std::cout << "lock not acquired\n";
 
    test.lock();
    // non-recursive mutex would return false from try_lock now
    if (test.try_lock())
    {
        std::cout << "lock acquired\n";
        test.unlock(); 
    }
    else
        std::cout << "lock not acquired\n";
 
    test.unlock();
}
```

## See also
- [lock](/cpp/thread/recursive_mutex/lock/)
- [unlock](/cpp/thread/recursive_mutex/unlock/)
- [C documentation](/c/thread/mtx_trylock/)
