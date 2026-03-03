---
title: "std::atomic_flag_test, std::atomic_flag_test_explicit"
source_path: "cpp/atomic/atomic_flag_test"
header: "<atomic>"
category: "atomic"
since: "C++20"
---

Atomically reads the value of the *object and returns the value.

## Declarations
```cpp
bool atomic_flag_test( const volatile std::atomic_flag* object ) noexcept;
```
_(since C++20)_

```cpp
bool atomic_flag_test( const std::atomic_flag* object ) noexcept;
```
_(since C++20)_

```cpp
bool atomic_flag_test_explicit( const volatile std::atomic_flag* object,
std::memory_order order ) noexcept;
```
_(since C++20)_

```cpp
bool atomic_flag_test_explicit( const std::atomic_flag* object,
std::memory_order order ) noexcept;
```
_(since C++20)_

## Parameters
- `object`: pointer to the atomic_flag object to read
- `order`: the memory synchronization ordering

## Return value
The value atomically read.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_atomic_flag_test
201907L
(C++20)
std::atomic_flag::test

## Example
This section is incompleteReason: no example

## See also
- [test](/cpp/atomic/atomic_flag/test/)
