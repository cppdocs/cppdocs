---
title: "std::atomic<T>::is_lock_free"
source_path: "cpp/atomic/atomic/is_lock_free"
category: "atomic"
since: "C++11"
---

Checks whether the atomic operations on all objects of this type are lock-free.

## Declarations
```cpp
bool is_lock_free() const noexcept;
```
_(since C++11)_

```cpp
bool is_lock_free() const volatile noexcept;
```
_(since C++11)_

## Return value
true if the atomic operations on the objects of this type are lock-free, false otherwise.

## Notes
All atomic types except for [std::atomic_flag](/cpp/atomic/atomic_flag/) may be implemented using mutexes or other locking operations, rather than using the lock-free atomic CPU instructions. Atomic types are also allowed to be sometimes lock-free, e.g. if only aligned memory accesses are naturally atomic on a given architecture, misaligned objects of the same type have to use locks.

The C++ standard recommends (but does not require) that lock-free atomic operations are also address-free, that is, suitable for communication between processes using shared memory.

## Example
```cpp
#include <atomic>
#include <iostream>
#include <utility>
 
struct A { int a[100]; };
struct B { int x, y; };
 
int main()
{
    std::cout << std::boolalpha
              << "std::atomic<A> is lock free? "
              << std::atomic<A>{}.is_lock_free() << '\n'
              << "std::atomic<B> is lock free? "
              << std::atomic<B>{}.is_lock_free() << '\n';
}
```

## See also
- [atomic_is_lock_free](/cpp/atomic/atomic_is_lock_free/)
- [atomic_is_lock_free(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [is_always_lock_free](/cpp/atomic/atomic/is_always_lock_free/)
