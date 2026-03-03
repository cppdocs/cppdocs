---
title: "operator==,!=,<,<=,>,>=,<=>(std::multimap)"
source_path: "cpp/container/multimap/operator_cmp"
header: "<map>"
category: "container"
since: "C++20"
---

Compares the contents of two multimaps.

## Declarations
```cpp
template< class Key, class T, class Compare, class Alloc >
bool operator==( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```

```cpp
template< class Key, class T, class Compare, class Alloc >
bool operator!=( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class Key, class T, class Compare, class Alloc >
bool operator<( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class Key, class T, class Compare, class Alloc >
bool operator<=( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class Key, class T, class Compare, class Alloc >
bool operator>( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class Key, class T, class Compare, class Alloc >
bool operator>=( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```
_(until C++20)_

```cpp
template< class Key, class T, class Compare, class Alloc >
synth-three-way-result<T>
operator<=>( const std::multimap<Key, T, Compare, Alloc>& lhs,
const std::multimap<Key, T, Compare, Alloc>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: multimaps whose contents to compare

## Notes
The relational operators are defined in terms of the element type's operator<.

The relational operators are defined in terms of [synth-three-way](/cpp/standard_library/synth-three-way/), which uses operator<=> if possible, or operator< otherwise.

Notably, if the element does not itself provide operator<=>, but is implicitly convertible to a three-way comparable type, that conversion will be used instead of operator<.

## Example
```cpp
#include <cassert>
#include <compare>
#include <map>
 
int main()
{
    std::multimap<int, char> a{{1, 'a'}, {2, 'b'}, {3, 'c'}};
    std::multimap<int, char> b{{1, 'a'}, {2, 'b'}, {3, 'c'}};
    std::multimap<int, char> c{{7, 'Z'}, {8, 'Y'}, {9, 'X'}, {10, 'W'}};
 
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
