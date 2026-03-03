---
title: "std::counted_iterator<I>::counted_iterator"
source_path: "cpp/iterator/counted_iterator/counted_iterator"
category: "iterator"
since: "C++20"
---

Constructs a new iterator adaptor.

## Declarations
```cpp
constexpr counted_iterator() requires std::default_initializable<I> = default;
```
_(since C++20)_

```cpp
constexpr counted_iterator( I x, std::iter_difference_t<I> n );
```
_(since C++20)_

```cpp
template< class I2 >
requires std::convertible_to<const I2&, I>
constexpr counted_iterator( const counted_iterator<I2>& other );
```
_(since C++20)_

## Parameters
- `x`: iterator to adapt
- `n`: distance to the end
- `other`: iterator adaptor to convert

## Example
```cpp
#include <algorithm>
#include <initializer_list>
#include <iostream>
#include <iterator>
 
int main()
{
    static constexpr auto pi = {3, 1, 4, 1, 5, 9, 2};
 
    // (1) default constructor:
    constexpr std::counted_iterator<std::initializer_list<int>::iterator> i1{};
    static_assert(i1 == std::default_sentinel);
    static_assert(i1.count() == 0);
 
    // (2) initializes the iterator and length respectively:
    constexpr std::counted_iterator<std::initializer_list<int>::iterator> i2{
        pi.begin(), pi.size() - 2
    };
    static_assert(i2.count() == 5);
    static_assert(*i2 == 3 && i2[1] == 1);
 
    // (3) converting-constructor:
    std::counted_iterator<std::initializer_list<const int>::iterator> i3{i2};
 
    std::ranges::copy(i3, std::default_sentinel,
        std::ostream_iterator<const int>{std::cout, " "});
}
```

## See also
- [operator=](/cpp/iterator/counted_iterator/operator/)
