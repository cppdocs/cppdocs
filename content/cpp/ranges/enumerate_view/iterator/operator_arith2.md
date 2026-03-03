---
title: "operator+,-(ranges::enumerate_view::iterator)"
source_path: "cpp/ranges/enumerate_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Performs [iterator](/cpp/ranges/enumerate_view/iterator/) arithmetic or calculates the distance.

## Declarations
```cpp
friend constexpr /* iterator */
operator+( const /* iterator */& i, difference_type n )
requires ranges::random_access_range</* Base */>;
```
_(since C++23)_

```cpp
friend constexpr /* iterator */
operator+( difference_type n, const /* iterator */& i )
requires ranges::random_access_range</* Base */>;
```
_(since C++23)_

```cpp
friend constexpr /* iterator */
operator-( const /* iterator */& i, difference_type n )
requires ranges::random_access_range</* Base */>;
```
_(since C++23)_

```cpp
friend constexpr difference_type
operator-( const /* iterator */& i, const /* iterator */& j ) noexcept;
```
_(since C++23)_

## Parameters
- `i, j`: the iterators
- `n`: position relative to current location

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3912 | C++23 | overload (4) was not noexcept | it is noexcept |

## See also
- [operator++operator++(int)operator--operator--(int)operator+=operator-=](/cpp/ranges/enumerate_view/iterator/operator_arith/)
