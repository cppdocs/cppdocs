---
title: "operator==,!=,<,<=,>,>=,<=>(std::vector)"
source_path: "cpp/container/vector/operator_cmp"
header: "<vector>"
category: "container"
since: "C++20"
---

Compares the contents of two vectors.

## Declarations
```cpp
template< class T, class Alloc >
bool operator==( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(constexpr since C++20)_

```cpp
template< class T, class Alloc >
bool operator!=( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class T, class Alloc >
bool operator<( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class T, class Alloc >
bool operator<=( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class T, class Alloc >
bool operator>( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class T, class Alloc >
bool operator>=( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class T, class Alloc >
constexpr synth-three-way-result<T>
operator<=>( const std::vector<T, Alloc>& lhs,
const std::vector<T, Alloc>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: vectors whose contents to compare

## Notes
The relational operators are defined in terms of the element type's operator<.

The relational operators are defined in terms of [synth-three-way](/cpp/standard_library/synth-three-way/), which uses operator<=> if possible, or operator< otherwise.

Notably, if the element does not itself provide operator<=>, but is implicitly convertible to a three-way comparable type, that conversion will be used instead of operator<.

## Example
```cpp
#include <cassert>
#include <compare>
#include <vector>
 
int main()
{
    const std::vector
        a{1, 2, 3},
        b{1, 2, 3},
        c{7, 8, 9, 10};
 
    assert
    (""
        "Compare equal containers:" &&
        (a != b) == false &&
        (a == b) == true &&
        (a < b) == false &&
        (a <= b) == true &&
        (a > b) == false &&
        (a >= b) == true &&
        (a <=> b) != std::weak_ordering::less &&
        (a <=> b) != std::weak_ordering::greater &&
        (a <=> b) == std::weak_ordering::equivalent &&
        (a <=> b) >= 0 &&
        (a <=> b) <= 0 &&
        (a <=> b) == 0 &&
 
        "Compare non equal containers:" &&
        (a != c) == true &&
        (a == c) == false &&
        (a < c) == true &&
        (a <= c) == true &&
        (a > c) == false &&
        (a >= c) == false &&
        (a <=> c) == std::weak_ordering::less &&
        (a <=> c) != std::weak_ordering::equivalent &&
        (a <=> c) != std::weak_ordering::greater &&
        (a <=> c) < 0 &&
        (a <=> c) != 0 &&
        (a <=> c) <= 0 &&
    "");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3431 | C++20 | operator<=> did not require Tto model three_way_comparable | requires |
