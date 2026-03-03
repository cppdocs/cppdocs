---
title: "std::atomic_is_lock_free, ATOMIC_xxx_LOCK_FREE"
source_path: "cpp/atomic/atomic_is_lock_free"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

1,2) Determines if the atomic object pointed to by obj is implemented lock-free, as if by calling obj->is_lock_free(). In any given program execution, the result of the lock-free query is the same for all atomic objects of the same type.

## Declarations
```cpp
template< class T >
bool atomic_is_lock_free( const volatile std::atomic<T>* obj ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
bool atomic_is_lock_free( const std::atomic<T>* obj ) noexcept;
```
_(since C++11)_

```cpp
#define ATOMIC_BOOL_LOCK_FREE /* unspecified */
#define ATOMIC_CHAR_LOCK_FREE /* unspecified */
#define ATOMIC_CHAR16_T_LOCK_FREE /* unspecified */
#define ATOMIC_CHAR32_T_LOCK_FREE /* unspecified */
#define ATOMIC_WCHAR_T_LOCK_FREE /* unspecified */
#define ATOMIC_SHORT_LOCK_FREE /* unspecified */
#define ATOMIC_INT_LOCK_FREE /* unspecified */
#define ATOMIC_LONG_LOCK_FREE /* unspecified */
#define ATOMIC_LLONG_LOCK_FREE /* unspecified */
#define ATOMIC_POINTER_LOCK_FREE /* unspecified */
```
_(since C++11)_

```cpp
#define ATOMIC_CHAR8_T_LOCK_FREE /* unspecified */
```
_(since C++20)_

## Parameters
- `obj`: pointer to the atomic object to examine

## Return value
true if *obj is a lock-free atomic, false otherwise.

## Notes
All atomic types except for [std::atomic_flag](/cpp/atomic/atomic_flag/) may be implemented using mutexes or other locking operations, rather than using the lock-free atomic CPU instructions. Atomic types are also allowed to be sometimes lock-free: for example, if only some subarchitectures support lock-free atomic access for a given type (such as the CMPXCHG16B instruction on x86-64), whether atomics are lock-free may not be known until runtime.

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
    std::atomic<A> a;
    std::atomic<B> b;
    std::cout << std::boolalpha
              << "std::atomic<A> is lock free? "
              << std::atomic_is_lock_free(&a) << '\n'
              << "std::atomic<B> is lock free? "
              << std::atomic_is_lock_free(&b) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3249 | C++11 | atomic_is_lock_free was specified via pointers, whichwas ambiguous and might accept invalid pointer values | specified viaatomic objects |

## See also
- [is_lock_free](/cpp/atomic/atomic/is_lock_free/)
- [atomic_flag](/cpp/atomic/atomic_flag/)
- [is_always_lock_free](/cpp/atomic/atomic/is_always_lock_free/)
- [std::atomic_is_lock_free(std::shared_ptr)](/cpp/memory/shared_ptr/atomic/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [C documentation](/c/atomic/atomic_is_lock_free/)
- [C documentation](/c/atomic/ATOMIC_LOCK_FREE_consts/)
