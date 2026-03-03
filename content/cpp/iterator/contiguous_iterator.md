---
title: "std::contiguous_iterator"
source_path: "cpp/iterator/contiguous_iterator"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The contiguous_iterator concept refines [random_access_iterator](/cpp/iterator/random_access_iterator/) by providing a guarantee the denoted elements are stored contiguously in the memory.

## Declarations
```cpp
template< class I >
concept contiguous_iterator =
std::random_access_iterator<I> &&
std::derived_from</*ITER_CONCEPT*/<I>, std::contiguous_iterator_tag> &&
std::is_lvalue_reference_v<std::iter_reference_t<I>> &&
std::same_as<
std::iter_value_t<I>, std::remove_cvref_t<std::iter_reference_t<I>>
> &&
requires(const I& i) {
{ std::to_address(i) } ->
std::same_as<std::add_pointer_t<std::iter_reference_t<I>>>;
};
```
_(since C++20)_

## Notes
contiguous_iterator is modeled by every pointer type to complete object type.

Iterator types in the standard library that are required to satisfy the [LegacyContiguousIterator](/cpp/named_req/contiguousiterator/) requirements in C++17 are also required to model contiguous_iterator in C++20.

## See also
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
- [bidirectional_iterator](/cpp/iterator/bidirectional_iterator/)
