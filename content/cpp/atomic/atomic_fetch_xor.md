---
title: "std::atomic_fetch_xor, std::atomic_fetch_xor_explicit"
source_path: "cpp/atomic/atomic_fetch_xor"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically replaces the value pointed by obj with the result of bitwise XOR between the old value of obj and arg. Returns the value obj held previously.

## Declarations
```cpp
template< class T >
T atomic_fetch_xor( std::atomic<T>* obj,
typename std::atomic<T>::value_type arg ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_xor( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type arg ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_xor_explicit( std::atomic<T>* obj,
typename std::atomic<T>::value_type arg,
std::memory_order order) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_xor_explicit( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type arg,
std::memory_order order) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `arg`: the value to bitwise XOR to the value stored in the atomic object
- `order`: the memory synchronization ordering

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *obj.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [fetch_xor](/cpp/atomic/atomic/fetch_xor/)
- [atomic_fetch_oratomic_fetch_or_explicit](/cpp/atomic/atomic_fetch_or/)
- [atomic_fetch_andatomic_fetch_and_explicit](/cpp/atomic/atomic_fetch_and/)
- [C documentation](/c/atomic/atomic_fetch_xor/)
