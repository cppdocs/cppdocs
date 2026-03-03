---
title: "std::ranges::prev"
source_path: "cpp/iterator/ranges/prev"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Return the nth predecessor of iterator i.

## Declarations
```cpp
Call signature
```

```cpp
template< std::bidirectional_iterator I >
constexpr I prev( I i );
```
_(since C++20)_

```cpp
template< std::bidirectional_iterator I >
constexpr I prev( I i, std::iter_difference_t<I> n );
```
_(since C++20)_

```cpp
template< std::bidirectional_iterator I >
constexpr I prev( I i, std::iter_difference_t<I> n, I bound );
```
_(since C++20)_

## Parameters
- `i`: an iterator
- `n`: number of elements i should be descended
- `bound`: iterator denoting the beginning of the range i points to

## Notes
Although the expression --r.end() often compiles for containers, it is not guaranteed to do so: r.end() is an rvalue expression, and there is no iterator requirement that specifies that decrement of an rvalue is guaranteed to work. In particular, when iterators are implemented as pointers or its operator-- is lvalue-ref-qualified, --r.end() does not compile, while ranges::prev(r.end()) does.

This is further exacerbated by ranges that do not model [ranges::common_range](/cpp/ranges/common_range/). For example, for some underlying ranges, ranges::transform_view::end doesn't have the same return type as ranges::transform_view::begin, and so --r.end() won't compile. This isn't something that ranges::prev can aid with, but there are workarounds.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <vector>
 
int main() 
{
    std::vector<int> v{3, 1, 4};
    auto pv = std::ranges::prev(v.end(), 2);
    std::cout << *pv << '\n';
 
    pv = std::ranges::prev(pv, 42, v.begin());
    std::cout << *pv << '\n';
}
```

## See also
- [ranges::next](/cpp/iterator/ranges/next/)
- [ranges::advance](/cpp/iterator/ranges/advance/)
- [prev](/cpp/iterator/prev/)
