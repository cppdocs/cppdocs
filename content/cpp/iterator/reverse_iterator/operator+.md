---
title: "operator+(std::reverse_iterator)"
source_path: "cpp/iterator/reverse_iterator/operator"
header: "<iterator>"
category: "iterator"
since: "C++23"
---

Returns the iterator it incremented by n. In fact, the underlying iterator is decremented by n.

## Declarations
```cpp
template< class Iter >
reverse_iterator<Iter> operator+
( typename reverse_iterator<Iter>::difference_type n,
const reverse_iterator<Iter>& it );
```
_(constexpr since C++17) (until C++23)_

```cpp
template< class Iter >
constexpr reverse_iterator<Iter> operator+
( std::iter_difference_t<Iter> n, const reverse_iterator<Iter>& it );
```
_(since C++23)_

## Parameters
- `n`: the number of positions to increment the iterator
- `it`: the iterator adaptor to increment

## Return value
reverse_iterator<Iter>(it.base() - n)

## Example
```cpp
#include <iostream>
#include <iterator>
#include <list>
#include <vector>
 
int main()
{
    {
        std::vector v{0, 1, 2, 3};
        std::reverse_iterator<std::vector<int>::iterator>
            ri1{std::reverse_iterator{v.rbegin()}};
        std::cout << *ri1 << ' '; // 3
        std::reverse_iterator<std::vector<int>::iterator> ri2{2 + ri1};
        std::cout << *ri2 << ' '; // 1
    }
 
    {
        std::list l{5, 6, 7, 8};
        std::reverse_iterator<std::list<int>::iterator>
            ri1{std::reverse_iterator{l.rbegin()}};
        std::cout << *ri1 << '\n'; // 8
    //  auto ri2{2 + ri1}; // Error: the underlying iterator does not
                           //        model random access iterator
    }
}
```

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/reverse_iterator/operator_arith/)
- [operator-]()
