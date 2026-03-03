---
title: "operator+(std::counted_iterator)"
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

Returns an iterator adaptor which is advanced by n. The behavior is undefined if n is greater than the length recorded within x (i.e. if x + n result in undefined behavior).

## Declarations
```cpp
friend constexpr counted_iterator operator+(
std::iter_difference_t<I> n, const counted_iterator& x )
requires std::random_access_iterator<I>;
```
_(since C++20)_

## Parameters
- `n`: the number of positions to increment the iterator
- `x`: the iterator adaptor to increment

## Return value
An iterator adaptor equal to x + n.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    std::vector v{0, 1, 2, 3, 4, 5};
    std::counted_iterator<std::vector<int>::iterator> p{v.begin() + 1, 4};
    std::cout << "*p:" << *p << ", count:" << p.count() << '\n';
    std::counted_iterator<std::vector<int>::iterator> q{2 + p};
    std::cout << "*q:" << *q << ", count:" << q.count() << '\n';
 
    std::list l{6, 7, 8, 9};
    std::counted_iterator<std::list<int>::iterator> r{l.begin(), 3};
    std::cout << "*r:" << *r << ", count:" << r.count() << '\n';
//  auto s{2 + r}; // error: the underlying iterator does
                   // not model std::random_access_iterator
}
```

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/counted_iterator/operator_arith/)
- [operator-]()
- [operator-(std::default_sentinel_t)](/cpp/iterator/counted_iterator/operator-2/)
