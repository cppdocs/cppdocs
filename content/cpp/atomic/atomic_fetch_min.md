---
title: "std::atomic_fetch_min, std::atomic_fetch_min_explicit"
source_path: "cpp/atomic/atomic_fetch_min"
header: "<atomic>"
category: "atomic"
since: "C++26"
---

Atomically replaces the value pointed by obj with the result of [std::min](/cpp/algorithm/min/) between the old value of obj and arg. Returns the value obj held previously. The operation is performed as if the following was executed:

## Declarations
```cpp
template< class T >
T atomic_fetch_min( std::atomic<T>* obj,
typename std::atomic<T>::value_type arg ) noexcept;
```
_(since C++26)_

```cpp
template< class T >
T atomic_fetch_min( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type arg ) noexcept;
```
_(since C++26)_

```cpp
template< class T >
T atomic_fetch_min_explicit( std::atomic<T>* obj,
typename std::atomic<T>::value_type arg,
std::memory_order order ) noexcept;
```
_(since C++26)_

```cpp
template< class T >
T atomic_fetch_min_explicit( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type arg,
std::memory_order order ) noexcept;
```
_(since C++26)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `arg`: the value to std::min with the value stored in the atomic object
- `order`: the memory synchronization ordering

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *obj.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_atomic_min_max
202403L
(C++26)
Atomic minimum/maximum

## Example
This section is incompleteReason: no example

## See also
- [fetch_min](/cpp/atomic/atomic/fetch_min/)
- [std::min](/cpp/algorithm/min/)
- [atomic_fetch_maxatomic_fetch_max_explicit](/cpp/atomic/atomic_fetch_max/)
- [std::max](/cpp/algorithm/max/)
