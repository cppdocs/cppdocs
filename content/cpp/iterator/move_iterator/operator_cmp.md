---
title: "operator==,!=,<,<=,>,>=,<=>(std::move_iterator)"
source_path: "cpp/iterator/move_iterator/operator_cmp"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Compares the underlying iterators of lhs and rhs.

## Declarations
```cpp
template< class Iter1, class Iter2 >
bool operator==( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator!=( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(constexpr since C++17) (until C++20)_

```cpp
template< class Iter1, class Iter2 >
bool operator< ( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator<=( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator> ( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, class Iter2 >
bool operator>=( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(constexpr since C++17)_

```cpp
template< class Iter1, std::three_way_comparable_with<Iter1> Iter2 >
constexpr std::compare_three_way_result_t<Iter1, Iter2>
operator<=>( const std::move_iterator<Iter1>& lhs,
const std::move_iterator<Iter2>& rhs );
```
_(since C++20)_

## Parameters
- `lhs, rhs`: iterator adaptors to compare

## Example
```cpp
#include <cassert>
#include <iterator>
 
int main()
{
    int a[]{9, 8, 7, 6};
    //            │  └───── x, y
    //            └──────── z
 
    // “x” and “y” are equal, but “x” is greater than “z”
    std::move_iterator<int*>
        x{std::end(a) - 1},
        y{std::end(a) - 1},
        z{std::end(a) - 2};
 
    // two-way comparisons
    assert(  x == y );
    assert(!(x != y));
    assert(!(x <  y));
    assert(  x <= y );
    assert(!(x == z));
    assert(  x != z );
    assert(!(x <  z));
    assert(!(x <= z));
 
    // three-way comparisons
    assert(  x <=> y == 0 );
    assert(!(x <=> y <  0));
    assert(!(x <=> y >  0));
    assert(!(x <=> z == 0));
    assert(!(x <=> z <  0));
    assert(  x <=> z >  0 );
}
```

## See also
- [operator==(std::move_sentinel)](/cpp/iterator/move_iterator/operator_cmp2/)
