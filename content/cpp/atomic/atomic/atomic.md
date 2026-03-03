---
title: "std::atomic<T>::atomic"
source_path: "cpp/atomic/atomic/atomic"
category: "atomic"
since: "C++20"
---

Constructs a new atomic variable.

## Declarations
```cpp
atomic() noexcept = default;
```
_(since C++11) (until C++20)_

```cpp
constexpr atomic() noexcept(std::is_nothrow_default_constructible_v<T>);
```
_(since C++20)_

```cpp
constexpr atomic( T desired ) noexcept;
```
_(since C++11)_

```cpp
atomic( const atomic& ) = delete;
```
_(since C++11)_

## Parameters
- `desired`: value to initialize with

## Notes
The default-initialized [std::atomic](/cpp/atomic/atomic/)<T> does not contain a T object, and its only valid uses are destruction and initialization by [std::atomic_init](/cpp/atomic/atomic_init/), see [LWG issue 2334](https://cplusplus.github.io/LWG/issue2334).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4169 | C++20 | std::is_default_constructible_v could report false positive | the default constructor is constrained |
