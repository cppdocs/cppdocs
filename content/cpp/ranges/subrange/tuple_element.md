---
title: "std::tuple_element<std::ranges::subrange>"
source_path: "cpp/ranges/subrange/tuple_element"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

The partial specializations of [std::tuple_element](/cpp/utility/tuple_element/) for [std::ranges::subrange](/cpp/ranges/subrange/) provide compile-time access to the iterator or sentinel type of a subrange, using tuple-like syntax. They are provided for structured binding support.

## Declarations
```cpp
template< class I, class S, ranges::subrange_kind K >
struct tuple_element<0, ranges::subrange<I, S, K>>;
```
_(since C++20)_

```cpp
template< class I, class S, ranges::subrange_kind K >
struct tuple_element<0, const ranges::subrange<I, S, K>>;
```
_(since C++20)_

```cpp
template< class I, class S, ranges::subrange_kind K >
struct tuple_element<1, ranges::subrange<I, S, K>>;
```
_(since C++20)_

```cpp
template< class I, class S, ranges::subrange_kind K >
struct tuple_element<1, const ranges::subrange<I, S, K>>;
```
_(since C++20)_

## Notes
As [get](/cpp/ranges/subrange/get/) functions for subrange return iterators and sentinels by value, const qualifier is not added to the result types when the subrange is const-qualified (but not volatile-qualified).

If the subrange is volatile-qualified, the result types are also volatile-qualified because the partial specialization for volatile or const volatile types are used. Such usage is deprecated.

## Example
```cpp
#include <iterator>
#include <list>
#include <ranges>
#include <type_traits>
 
int main()
{
    std::list<int> list{3, 1, 4, 1, 5, 9, 2, 6};
 
    std::ranges::subrange subrange
    {
        std::counted_iterator{std::begin(list), 4},
        std::default_sentinel
    };
 
    static_assert(
        std::is_same_v<
            std::tuple_element_t<0, decltype(subrange)>,
            // implementation-defined type:
            std::counted_iterator<std::_List_iterator<int>>
            >);
 
    static_assert(
        std::is_same_v<
            std::tuple_element_t<1, decltype(subrange)>,
            std::default_sentinel_t
            >);
}
```

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [tuple_element](/cpp/utility/tuple_element/)
- [std::tuple_size<std::ranges::subrange>](/cpp/ranges/subrange/tuple_size/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
