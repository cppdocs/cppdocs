---
title: "std::ranges::next"
source_path: "cpp/iterator/ranges/next"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Return the nth successor of iterator i.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_or_output_iterator I >
constexpr I next( I i );
```
_(since C++20)_

```cpp
template< std::input_or_output_iterator I >
constexpr I next( I i, std::iter_difference_t<I> n );
```
_(since C++20)_

```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
constexpr I next( I i, S bound );
```
_(since C++20)_

```cpp
template< std::input_or_output_iterator I, std::sentinel_for<I> S >
constexpr I next( I i, std::iter_difference_t<I> n, S bound );
```
_(since C++20)_

## Parameters
- `i`: an iterator
- `n`: number of elements to advance
- `bound`: sentinel denoting the end of the range i points to

## Notes
Although the expression ++x.begin() often compiles, it is not guaranteed to do so: x.begin() is an rvalue expression, and there is no requirement that specifies that increment of an rvalue is guaranteed to work. In particular, when iterators are implemented as pointers or its operator++ is lvalue-ref-qualified, ++x.begin() does not compile, while ranges::next(x.begin()) does.

## Example
```cpp
#include <cassert>
#include <iterator>
 
int main() 
{
    auto v = {3, 1, 4};
    {
        auto n = std::ranges::next(v.begin());
        assert(*n == 1);
    }
    {
        auto n = std::ranges::next(v.begin(), 2);
        assert(*n == 4);
    }
    {
        auto n = std::ranges::next(v.begin(), v.end());
        assert(n == v.end());
    }
    {
        auto n = std::ranges::next(v.begin(), 42, v.end());
        assert(n == v.end());
    }
}
```

## See also
- [ranges::prev](/cpp/iterator/ranges/prev/)
- [ranges::advance](/cpp/iterator/ranges/advance/)
- [next](/cpp/iterator/next/)
