---
title: "std::counted_iterator<I>::count"
source_path: "cpp/iterator/counted_iterator/count"
category: "iterator"
since: "C++20"
---

Returns the underlying length that is the distance to the end.

## Declarations
```cpp
constexpr std::iter_difference_t<I> count() const noexcept;
```
_(since C++20)_

## Return value
The underlying length.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <iterator>
 
int main()
{
    constexpr static auto il = {1, 2, 3, 4, 5};
    constexpr std::counted_iterator i1{il.begin() + 1, 3};
    static_assert(i1.count() == 3);
    auto i2{i1};
    for (; std::default_sentinel != i2; ++i2)
        std::cout << "*i2: " << *i2 << ", count(): " << i2.count() << '\n';
    assert(i2.count() == 0);
}
```

## See also
- [base](/cpp/iterator/counted_iterator/base/)
