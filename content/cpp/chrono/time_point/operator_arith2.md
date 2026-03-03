---
title: "operator+, operator-(std::chrono::time_point)"
source_path: "cpp/chrono/time_point/operator"
header: "<chrono>"
category: "chrono"
since: "C++14"
---

Performs add and subtract operations involving a time_point.

## Declarations
```cpp
template< class C, class D1, class R2, class P2 >
time_point<C, typename std::common_type<D1, duration<R2,P2>>::type>
operator+( const time_point<C,D1>& pt,
const duration<R2,P2>& d );
```
_(since C++11) (until C++14)_

```cpp
template< class C, class D1, class R2, class P2 >
constexpr time_point<C, std::common_type_t<D1, duration<R2,P2>>>
operator+( const time_point<C,D1>& pt,
const duration<R2,P2>& d );
```
_(since C++14)_

```cpp
template< class R1, class P1, class C, class D2 >
time_point<C, typename std::common_type<duration<R1,P1>,D2>::type>
operator+( const duration<R1,P1>& d,
const time_point<C,D2>& pt );
```
_(since C++11) (until C++14)_

```cpp
template< class R1, class P1, class C, class D2 >
constexpr time_point<C, std::common_type_t<duration<R1,P1>,D2>>
operator+( const duration<R1,P1>& d,
const time_point<C,D2>& pt );
```
_(since C++14)_

```cpp
template< class C, class D1, class R2, class P2 >
time_point<C, typename std::common_type<D1, duration<R2,P2>>::type>
operator-( const time_point<C,D1>& pt,
const duration<R2,P2>& d );
```
_(since C++11) (until C++14)_

```cpp
template< class C, class D1, class R2, class P2 >
constexpr time_point<C, std::common_type_t<D1, duration<R2,P2>>>
operator-( const time_point<C,D1>& pt,
const duration<R2,P2>& d );
```
_(since C++14)_

```cpp
template< class C, class D1, class D2 >
typename std::common_type<D1,D2>::type
operator-( const time_point<C,D1>& pt_lhs,
const time_point<C,D2>& pt_rhs );
```
_(since C++11) (until C++14)_

```cpp
template< class C, class D1, class D2 >
constexpr std::common_type_t<D1,D2>
operator-( const time_point<C,D1>& pt_lhs,
const time_point<C,D2>& pt_rhs );
```
_(since C++14)_

## Parameters
- `pt`: a time point to apply the offset to
- `d`: a time offset
- `pt_lhs, pt_rhs`: time points to extract difference from

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2739 | C++11 | pt - d behaved erratically for unsigned durations | behavior corrected |

## See also
- [operator+=operator-=](/cpp/chrono/time_point/operator_arith/)
