---
title: "std::chrono::operator==,<,<=,>,>=,<=>(std::chrono::leap_second)"
source_path: "cpp/chrono/leap_second/operator_cmp"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Compares the date and time represented by the objects x and y.

## Declarations
```cpp
constexpr bool operator==( const std::chrono::leap_second& x,
const std::chrono::leap_second& y ) noexcept;
```
_(since C++20)_

```cpp
constexpr std::strong_ordering operator<=>( const std::chrono::leap_second& x,
const std::chrono::leap_second& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator==( const std::chrono::leap_second& x,
const std::chrono::sys_time<Duration>& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator< ( const std::chrono::leap_second& x,
const std::chrono::sys_time<Duration>& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator< ( const std::chrono::sys_time<Duration>& x,
const std::chrono::leap_second& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator> ( const std::chrono::leap_second& x,
const std::chrono::sys_time<Duration>& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator> ( const std::chrono::sys_time<Duration>& x,
const std::chrono::leap_second& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator<=( const std::chrono::leap_second& x,
const std::chrono::sys_time<Duration>& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator<=( const std::chrono::sys_time<Duration>& x,
const std::chrono::leap_second& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator>=( const std::chrono::leap_second& x,
const std::chrono::sys_time<Duration>& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
constexpr bool operator>=( const std::chrono::sys_time<Duration>& x,
const std::chrono::leap_second& y ) noexcept;
```
_(since C++20)_

```cpp
template< class Duration >
requires std::three_way_comparable_with<
std::chrono::sys_seconds, std::chrono::sys_time<Duration>>
constexpr auto operator<=>( const std::chrono::leap_second& x,
const std::chrono::sys_time<Duration>& y ) noexcept;
```
_(since C++20)_
