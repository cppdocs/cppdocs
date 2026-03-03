---
title: "C++ named requirements: LegacyBidirectionalIterator"
source_path: "cpp/named_req/BidirectionalIterator"
category: "named_req"
---

A LegacyBidirectionalIterator is a [LegacyForwardIterator](/cpp/named_req/forwarditerator/) that can be moved in both directions (i.e. incremented and decremented).

## Declarations
```cpp
template<class I>
concept __LegacyBidirectionalIterator =
__LegacyForwardIterator<I> && requires(I i)
{
{ --i } -> std::same_as<I&>;
{ i-- } -> std::convertible_to<const I&>;
{ *i-- } -> std::same_as<std::iter_reference_t<I>>;
};
```

## Notes
The begin iterator is not decrementable and the behavior is undefined if --container.begin() is evaluated.

A bidirectional iterator does not have to be dereferenceable to be decrementable (in particular, the end iterator is not dereferenceable but is decrementable).

For the definition of [std::iterator_traits](/cpp/iterator/iterator_traits/), the following exposition-only concept is defined.

concept __LegacyBidirectionalIterator =
__LegacyForwardIterator<I> && requires(I i)
{
{ --i } -> [std::same_as](/cpp/concepts/same_as/)<I&>;
{ i-- } -> [std::convertible_to](/cpp/concepts/convertible_to/)<const I&>;
{ *i-- } -> [std::same_as](/cpp/concepts/same_as/)<[std::iter_reference_t](/cpp/iterator/iter_t/)<I>>;

where the exposition-only concept __LegacyForwardIterator is described in [LegacyForwardIterator](/cpp/named_req/forwarditerator/#Concept).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 299(N3066) | C++98 | the return type of *a-- wasrequired to be convertible to T | changed the returntype to reference[1] |
| LWG 383 | C++98 | b was required to be dereferenceable after --a | a is required to be dereferenceable instead |
| LWG 1212(N3066) | C++98 | the return type of *a-- did not match the returntype of *a++ required by LegacyForwardIterator | changed the returntype to reference |

## See also
- [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/)
- [forward_iterator](/cpp/iterator/forward_iterator/)
- [Iterator library](/cpp/iterator/)
