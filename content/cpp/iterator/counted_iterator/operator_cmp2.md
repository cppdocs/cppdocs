---
title: "operator==(std::counted_iterator<I>, std::default_sentinel_t)"
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

Checks if the underlying length (i.e. distance to the end) is equal to 0.

## Declarations
```cpp
friend constexpr bool operator==(
const counted_iterator& x, std::default_sentinel_t );
```
_(since C++20)_

## Parameters
- `x`: an iterator adaptor

## Return value
true if x.count() is equal to 0, false otherwise.

## Example
```cpp
#include <initializer_list>
#include <iterator>
 
int main()
{
    static constexpr auto v = {1, 2, 3, 4};
    constexpr std::counted_iterator<std::initializer_list<int>::iterator>
        it1{v.begin(), 3},
        it2{v.begin(), 0};
    static_assert(it1 != std::default_sentinel);
    static_assert(it2 == std::default_sentinel);
    static_assert(std::default_sentinel != it1);
    static_assert(std::default_sentinel == it2);
}
```

## See also
- [operator==operator<=>](/cpp/iterator/counted_iterator/operator_cmp/)
