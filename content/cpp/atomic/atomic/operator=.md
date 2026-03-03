---
title: "std::atomic<T>::operator="
source_path: "cpp/atomic/atomic/operator"
category: "atomic"
since: "C++11"
---

1,2) Atomically assigns desired to the atomic variable. Equivalent to store(desired).
It is deprecated if [std::atomic](/cpp/atomic/atomic/)<T>::is_always_lock_free is false and overload (2) participates in overload resolution.
(since C++20)

## Declarations
```cpp
T operator=( T desired ) noexcept;
```
_(since C++11)_

```cpp
T operator=( T desired ) volatile noexcept;
```
_(since C++11)_

```cpp
atomic& operator=( const atomic& ) = delete;
```
_(since C++11)_

```cpp
atomic& operator=( const atomic& ) volatile = delete;
```
_(since C++11)_

## Parameters
- `desired`: value to assign

## Notes
Unlike most assignment operators, the assignment operators for atomic types do not return a reference to their left-hand arguments. They return a copy of the stored value instead.

## See also
- [(constructor)](/cpp/atomic/atomic/atomic/)
