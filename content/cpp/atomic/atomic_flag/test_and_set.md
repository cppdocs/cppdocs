---
title: "std::atomic_flag::test_and_set"
source_path: "cpp/atomic/atomic_flag/test_and_set"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically changes the state of a [std::atomic_flag](/cpp/atomic/atomic_flag/) to set (true) and returns the value it held before.

## Declarations
```cpp
bool test_and_set( std::memory_order order =
std::memory_order_seq_cst ) volatile noexcept;
```
_(since C++11)_

```cpp
bool test_and_set( std::memory_order order =
std::memory_order_seq_cst ) noexcept;
```
_(since C++11)_

## Parameters
- `order`: the memory synchronization order

## See also
- [clear](/cpp/atomic/atomic_flag/clear/)
- [atomic_flag_test_and_setatomic_flag_test_and_set_explicit](/cpp/atomic/atomic_flag_test_and_set/)
- [memory_order](/cpp/atomic/memory_order/)
