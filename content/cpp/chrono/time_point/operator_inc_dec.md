---
title: "std::chrono::time_point<Clock,Duration>::operator++, std::chrono::time_point<Clock,Duration>::operator--"
source_path: "cpp/chrono/time_point/operator"
category: "chrono"
since: "C++20"
---

Modifies the point in time *this represents by one tick of the duration.

## Declarations
```cpp
constexpr time_point& operator++();
```
_(since C++20)_

```cpp
constexpr time_point operator++( int );
```
_(since C++20)_

```cpp
constexpr time_point& operator--();
```
_(since C++20)_

```cpp
constexpr time_point operator--( int );
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [operator++operator++(int)operator--operator--(int)](/cpp/chrono/duration/operator_arith2/)
- [operator+=operator-=](/cpp/chrono/time_point/operator_arith/)
- [operator+operator-](/cpp/chrono/time_point/operator_arith2/)
