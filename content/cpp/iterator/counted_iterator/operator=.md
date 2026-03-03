---
title: "std::counted_iterator<I>::operator="
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

The underlying iterator and length are assigned with those of other.

## Declarations
```cpp
template< class I2 >
requires std::assignable_from<I&, const I2&>
constexpr counted_iterator& operator=( const counted_iterator<I2>& other );
```
_(since C++20)_

## Parameters
- `other`: iterator adaptor to assign from

## Return value
*this

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <initializer_list>
#include <iterator>
 
int main()
{
    auto a = {3, 1, 4, 1, 5, 9, 2};
    std::counted_iterator<std::initializer_list<int>::iterator> p(begin(a), size(a) - 2);
    std::counted_iterator<std::initializer_list<int>::iterator> q;
    assert(q.count() == 0);
    assert(q.count() != p.count());
    q = p;
    assert(q.count() == p.count());
    assert(std::ranges::equal(p, std::default_sentinel, q, std::default_sentinel));
}
```

## See also
- [(constructor)](/cpp/iterator/counted_iterator/counted_iterator/)
