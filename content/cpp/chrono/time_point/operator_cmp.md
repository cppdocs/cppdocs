---
title: "operator==,!=,<,<=,>,>=,<=>(std::chrono::time_point)"
source_path: "cpp/chrono/time_point/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Compares two time points. The comparison is done by comparing the results [time_since_epoch()](/cpp/chrono/time_point/time_since_epoch/) for the time points.

## Declarations
```cpp
template< class Clock, class Dur1, class Dur2 >
bool operator==( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
constexpr bool operator==( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
bool operator!=( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
constexpr bool operator!=( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++14) (until C++20)_

```cpp
template< class Clock, class Dur1, class Dur2 >
bool operator<( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
constexpr bool operator<( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
bool operator<=( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
constexpr bool operator<=( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
bool operator>( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
constexpr bool operator>( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
bool operator>=( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class Clock, class Dur1, class Dur2 >
constexpr bool operator>=( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++14)_

```cpp
template< class Clock, class Dur1, std::three_way_comparable_with<Dur1> Dur2 >
constexpr auto operator<=>( const std::chrono::time_point<Clock,Dur1>& lhs,
const std::chrono::time_point<Clock,Dur2>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: time points to compare

## Notes
Two-way comparison operators of time_point were not constexpr in C++11, this was corrected in C++14.
