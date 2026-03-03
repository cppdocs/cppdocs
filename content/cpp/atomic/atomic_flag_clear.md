---
title: "std::atomic_flag_clear, std::atomic_flag_clear_explicit"
source_path: "cpp/atomic/atomic_flag_clear"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically changes the state of the [std::atomic_flag](/cpp/atomic/atomic_flag/) pointed to by obj to clear (false).

## Declarations
```cpp
void atomic_flag_clear( volatile std::atomic_flag* obj ) noexcept;
```
_(since C++11)_

```cpp
void atomic_flag_clear( std::atomic_flag* obj ) noexcept;
```
_(since C++11)_

```cpp
void atomic_flag_clear_explicit( volatile std::atomic_flag* obj,
std::memory_order order ) noexcept;
```
_(since C++11)_

```cpp
void atomic_flag_clear_explicit( std::atomic_flag* obj,
std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to std::atomic_flag to access
- `order`: the memory synchronization ordering

## Notes
std::atomic_flag_clear and std::atomic_flag_clear_explicit can be implemented as obj->clear() and obj->clear(order) respectively.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2138 | C++11 | order could be std::memory_order_consume | the behavior is undefined in this case |

## See also
- [atomic_flag](/cpp/atomic/atomic_flag/)
- [atomic_flag_test_and_setatomic_flag_test_and_set_explicit](/cpp/atomic/atomic_flag_test_and_set/)
- [memory_order](/cpp/atomic/memory_order/)
- [C documentation](/c/atomic/atomic_flag_clear/)
