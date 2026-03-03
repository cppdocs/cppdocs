---
title: "std::random_access_iterator"
source_path: "cpp/iterator/random_access_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept random_access_iterator refines [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/) by adding support for constant time advancement with the +=, +, -=, and - operators, constant time computation of distance with -, and array notation with subscripting [].

## Declarations
```cpp
template< class I >
concept random_access_iterator =
std::bidirectional_iterator<I> &&
std::derived_from</*ITER_CONCEPT*/<I>, std::random_access_iterator_tag> &&
std::totally_ordered<I> &&
std::sized_sentinel_for<I, I> &&
requires(I i, const I j, const std::iter_difference_t<I> n) {
{ i += n } -> std::same_as<I&>;
{ j + n } -> std::same_as<I>;
{ n + j } -> std::same_as<I>;
{ i -= n } -> std::same_as<I&>;
{ j - n } -> std::same_as<I>;
{ j[n] } -> std::same_as<std::iter_reference_t<I>>;
};
```
_(since C++20)_

## Notes
Unlike the [LegacyRandomAccessIterator](/cpp/named_req/randomaccessiterator/) requirements, the random_access_iterator concept does not require dereference to return an lvalue.

## Example
```cpp
#include <iterator>
 
namespace cxx20
{
    template<std::input_or_output_iterator Iter>
    constexpr std::iter_difference_t<Iter> distance(Iter first, Iter last)
    {
        if constexpr(std::random_access_iterator<Iter>)
            return last - first;
        else
        {
            std::iter_difference_t<Iter> result{};
            for (; first != last; ++first)
                ++result;
            return result;
        }
    }
}
 
int main()
{
    static constexpr auto il = {3, 1, 4};
 
    static_assert(std::random_access_iterator<decltype(il.begin())> &&
                  cxx20::distance(il.begin(), il.end()) == 3 &&
                  cxx20::distance(il.end(), il.begin()) == -3);
}
```

## See also
- [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/)
- [forward_iterator](/cpp/iterator/forward_iterator/)
- [contiguous_iterator](/cpp/iterator/contiguous_iterator/)
