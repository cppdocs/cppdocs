---
title: "operator==,!=,<,<=,>,>=,<=>(std::reverse_iterator)"
source_path: "cpp/iterator/reverse_iterator/operator_cmp"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Compares the underlying iterators of lhs and rhs.

## Declarations
```cpp
template< class Iter1, class Iter2 >
bool operator==( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator!=( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator< ( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator<=( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator> ( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator>=( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, std::three_way_comparable_with<Iter1> Iter2 >
constexpr std::compare_three_way_result_t<Iter1, Iter2>
operator<=>( const std::reverse_iterator<Iter1>& lhs,
const std::reverse_iterator<Iter2>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: iterator adaptors to compare

## Notes
operator<=> returns rhs.base() <=> lhs.base() rather than lhs.base() <=> rhs.base() because this is a reverse iterator.

## Example
```cpp
#include <cassert>
#include <iterator>
 
int main()
{
    int a[]{0, 1, 2, 3};
    //            ↑  └───── x, y
    //            └──────── z
    // “x” and “y” are equal, but “x” is less than “z” (reversely)
    std::reverse_iterator<int*>
        x{std::rend(a) - std::size(a)},
        y{std::rend(a) - std::size(a)},
        z{std::rbegin(a) + 1};
 
    // two-way comparisons
    assert(  x == y );
    assert(!(x != y));
    assert(!(x <  y));
    assert(  x <= y );
    assert(!(x == z));
    assert(  x != z );
    assert(  x <  z );
    assert(  x <= z );
 
    // three-way comparisons
    assert(  x <=> y == 0 );
    assert(!(x <=> y <  0));
    assert(!(x <=> y >  0));
    assert(!(x <=> z == 0));
    assert(  x <=> z <  0 );
    assert(!(x <=> z >  0));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 280 | C++98 | heterogeneous assignment was not allowed | allowed |
