---
title: "C++ named requirements: LegacyInputIterator"
source_path: "cpp/named_req/InputIterator"
category: "named_req"
---

A LegacyInputIterator is a [LegacyIterator](/cpp/named_req/iterator/) that can read from the pointed-to element. LegacyInputIterators only guarantee validity for single pass algorithms: once a LegacyInputIterator i has been incremented, all copies of its previous value may be invalidated.

## Declarations
```cpp
template<class I>
concept __LegacyInputIterator =
__LegacyIterator<I> && std::equality_comparable<I> && requires(I i)
{
typename std::incrementable_traits<I>::difference_type;
typename std::indirectly_readable_traits<I>::value_type;
typename std::common_reference_t<std::iter_reference_t<I>&&,
typename std::indirectly_readable_traits<I>::value_type&>;
*i++;
typename std::common_reference_t<decltype(*i++)&&,
typename std::indirectly_readable_traits<I>::value_type&>;
requires std::signed_integral<typename std::incrementable_traits<I>::difference_type>;
};
```

## Notes
For an input iterator X that is not a [LegacyForwardIterator](/cpp/named_req/forwarditerator/), [std::iterator_traits](/cpp/iterator/iterator_traits/)<X>::reference does not have to be a reference type: dereferencing an input iterator may return a proxy object or [std::iterator_traits](/cpp/iterator/iterator_traits/)<X>::value_type itself by value (as in the case of [std::istreambuf_iterator](/cpp/iterator/istreambuf_iterator/)).

For the definition of [std::iterator_traits](/cpp/iterator/iterator_traits/), the following exposition-only concept is defined.

concept __LegacyInputIterator =
__LegacyIterator<I> && [std::equality_comparable](/cpp/concepts/equality_comparable/)<I> && requires(I i)
{
typename [std::incrementable_traits](/cpp/iterator/incrementable_traits/)<I>::difference_type;
typename [std::indirectly_readable_traits](/cpp/iterator/indirectly_readable_traits/)<I>::value_type;
typename [std::common_reference_t](/cpp/types/common_reference/)<[std::iter_reference_t](/cpp/iterator/iter_t/)<I>&&,
typename [std::indirectly_readable_traits](/cpp/iterator/indirectly_readable_traits/)<I>::value_type&>;
*i++;
typename [std::common_reference_t](/cpp/types/common_reference/)<decltype(*i++)&&,
typename [std::indirectly_readable_traits](/cpp/iterator/indirectly_readable_traits/)<I>::value_type&>;
requires [std::signed_integral](/cpp/concepts/signed_integral/)<typename [std::incrementable_traits](/cpp/iterator/incrementable_traits/)<I>::difference_type>;

where the exposition-only concept __LegacyIterator is described in [LegacyIterator](/cpp/named_req/iterator/#Concept).

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 98 | C++98 | the return type of *i++ was required to be T | it can be any type convertible to T |
| LWG 2114(P2167R3) | C++98 | convertibility to bool was too weak toreflect the expectation of implementations | requirements strengthened |

## See also
- [input_iterator](/cpp/iterator/input_iterator/)
- [Iterator library](/cpp/iterator/)
