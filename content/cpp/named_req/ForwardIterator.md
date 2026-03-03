---
title: "C++ named requirements: LegacyForwardIterator"
source_path: "cpp/named_req/ForwardIterator"
category: "named_req"
---

A LegacyForwardIterator is a [LegacyIterator](/cpp/named_req/iterator/) that can read data from the pointed-to element.

## Declarations
```cpp
template<class It>
concept __LegacyForwardIterator =
__LegacyInputIterator<It> && std::constructible_from<It> &&
std::is_reference_v<std::iter_reference_t<It>> &&
std::same_as<
std::remove_cvref_t<std::iter_reference_t<It>>,
typename std::indirectly_readable_traits<It>::value_type> &&
requires(It it) {
{ it++ } -> std::convertible_to<const It&>;
{ *it++ } -> std::same_as<std::iter_reference_t<It>>;
};
```

## Notes
Unlike the [std::forward_iterator](/cpp/iterator/forward_iterator/) concept, the LegacyForwardIterator requirements requires dereference to return a reference.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1212(N3066) | C++98 | the type of *i++ did not match the type of*i-- required by LegacyBidirectionalIterator | changed thetype to Ref |
| LWG 1311(N3066) | C++98 | “a == b implies ++a == ++b” alonedid not offer multipass guarantee[1] | also requires “a == bimplies ++a != b”[2] |
| LWG 3798 | C++20 | __LegacyForwardIterator requiredstd::iter_reference_t<It> to be an lvalue reference type | also allows rvaluereference types |

## See also
- [forward_iterator](/cpp/iterator/forward_iterator/)
- [input_iterator](/cpp/iterator/input_iterator/)
- [Iterator library](/cpp/iterator/)
