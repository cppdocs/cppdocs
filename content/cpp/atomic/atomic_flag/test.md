---
title: "std::atomic_flag::test"
source_path: "cpp/atomic/atomic_flag/test"
category: "atomic"
since: "C++20"
---

Atomically reads the value of the *this and returns the value.

## Declarations
```cpp
bool test( std::memory_order order =
std::memory_order_seq_cst ) const volatile noexcept;
```
_(since C++20)_

```cpp
bool test( std::memory_order order =
std::memory_order_seq_cst ) const noexcept;
```
_(since C++20)_

## Parameters
- `order`: the memory synchronization ordering

## Return value
The value atomically read.

## Example
This section is incompleteReason: no example

## See also
- [atomic_flag_testatomic_flag_test_explicit](/cpp/atomic/atomic_flag_test/)
