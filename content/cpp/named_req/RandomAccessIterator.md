---
title: "C++ named requirements: LegacyRandomAccessIterator"
source_path: "cpp/named_req/RandomAccessIterator"
category: "named_req"
---

A LegacyRandomAccessIterator is a [LegacyBidirectionalIterator](/cpp/named_req/bidirectionaliterator/) that can be moved to point to any element in constant time.

## Declarations
```cpp
template<class I>
concept __LegacyRandomAccessIterator =
__LegacyBidirectionalIterator<I> && std::totally_ordered<I> &&
requires(I i, typename std::incrementable_traits<I>::difference_type n)
{
{ i += n } -> std::same_as<I&>;
{ i -= n } -> std::same_as<I&>;
{ i + n } -> std::same_as<I>;
{ n + i } -> std::same_as<I>;
{ i - n } -> std::same_as<I>;
{ i - i } -> std::same_as<decltype(n)>;
{ i[n] } -> std::convertible_to<std::iter_reference_t<I>>;
};
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 299(N3066) | C++98 | the return type of a[n] was requiredto be convertible to const value_type& | the return type is required tobe convertible to reference |
| LWG 448 | C++98 | the return type of a[n] was requiredto be convertible to value_type | the return type is required to beconvertible to const value_type&[1] |
| LWG 1079 | C++98 | b - a was defined using a < b,resulted in circular definition | removed a < b from the definition |
| LWG 2114(P2167R3) | C++98 | convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |

## See also
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
- [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/)
- [Iterator library](/cpp/iterator/)
