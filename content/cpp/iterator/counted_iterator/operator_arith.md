---
title: "std::counted_iterator<I>::operator++,+,+=,--,-,-="
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

Increments or decrements the underlying iterator current and the distance to the end length.

## Declarations
```cpp
constexpr counted_iterator& operator++();
```
_(since C++20)_

```cpp
constexpr decltype(auto) operator++( int );
```
_(since C++20)_

```cpp
constexpr counted_iterator operator++( int )
requires std::forward_iterator<I>;
```
_(since C++20)_

```cpp
constexpr counted_iterator& operator--()
requires std::bidirectional_iterator<I>;
```
_(since C++20)_

```cpp
constexpr counted_iterator operator--( int )
requires std::bidirectional_iterator<I>;
```
_(since C++20)_

```cpp
constexpr counted_iterator operator+( std::iter_difference_t<I> n ) const
requires std::random_access_iterator<I>;
```
_(since C++20)_

```cpp
constexpr counted_iterator& operator+=( std::iter_difference_t<I> n )
requires std::random_access_iterator<I>;
```
_(since C++20)_

```cpp
constexpr counted_iterator operator-( std::iter_difference_t<I> n ) const
requires std::random_access_iterator<I>;
```
_(since C++20)_

```cpp
constexpr counted_iterator& operator-=( std::iter_difference_t<I> n )
requires std::random_access_iterator<I>;
```
_(since C++20)_

## Parameters
- `n`: the number of positions to increment or decrement the iterator adaptor

## Example
```cpp
#include <cassert>
#include <initializer_list>
#include <iterator>
 
int main()
{
    const auto v = {1, 2, 3, 4, 5, 6};
    std::counted_iterator<std::initializer_list<int>::iterator> it1{v.begin(), 5};
 
    ++it1;              assert(*it1 == 2 && it1.count() == 4); // (1)
    auto it2 = it1++;   assert(*it2 == 2 && *it1 == 3);        // (3)
    --it1;              assert(*it1 == 2 && it1.count() == 4); // (4)
    auto it3 = it1--;   assert(*it3 == 2 && *it1 == 1);        // (5)
    auto it4 = it1 + 3; assert(*it4 == 4 && it4.count() == 2); // (6)
    auto it5 = it4 - 3; assert(*it5 == 1 && it5.count() == 5); // (8)
    it1 += 3;           assert(*it1 == 4 && it1.count() == 2); // (7)
    it1 -= 3;           assert(*it1 == 1 && it1.count() == 5); // (9)
}
```

## See also
- [operator+]()
- [operator-]()
