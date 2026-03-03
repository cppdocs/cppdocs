---
title: "std::iter_value_t, std::iter_reference_t, std::iter_const_reference_t, std::iter_difference_t, std::iter_rvalue_reference_t, std::iter_common_reference_t"
source_path: "cpp/iterator/iter_t"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Compute the associated types of an iterator.

## Declarations
```cpp
template< class T >
using iter_value_t = /* see below */;
```
_(since C++20)_

```cpp
template< /*dereferenceable*/ T >
using iter_reference_t = decltype(*std::declval<T&>());
```
_(since C++20)_

```cpp
template< std::indirectly_readable T >
using iter_const_reference_t =
std::common_reference_t<const std::iter_value_t<T>&&,
std::iter_reference_t<T>>;
```
_(since C++23)_

```cpp
template< class T >
using iter_difference_t = /* see below */;
```
_(since C++20)_

```cpp
template< /*dereferenceable*/ T>
requires /* see below */
using iter_rvalue_reference_t =
decltype(ranges::iter_move(std::declval<T&>()));
```
_(since C++20)_

```cpp
template< std::indirectly_readable T >
using iter_common_reference_t =
std::common_reference_t<std::iter_reference_t<T>,
/*indirect-value-t*/<T>>;
```
_(since C++20)_

```cpp
Helper templates
```

```cpp
template< class T >
concept /*dereferenceable*/ = /* see below */;
```
_(exposition only*)_

```cpp
template< std::indirectly_readable T >
using /*indirect-value-t*/ = /* see below */;
```
_(exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2609R3 | C++20 | std::iter_common_reference_t was defined in termsof std::iter_value_t<T>& which incorrectly handledstd::projected types that project into rvalue reference types | defined in terms of/*indirect-value-t*/<T>to handle such cases |

## See also
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [weakly_incrementable](/cpp/iterator/weakly_incrementable/)
- [semiregular](/cpp/concepts/semiregular/)
- [indirectly_readable_traits](/cpp/iterator/indirectly_readable_traits/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [incrementable_traits](/cpp/iterator/incrementable_traits/)
- [weakly_incrementable](/cpp/iterator/weakly_incrementable/)
- [iterator_traits](/cpp/iterator/iterator_traits/)
- [ranges::iterator_tranges::const_iterator_tranges::sentinel_tranges::const_sentinel_t](/cpp/ranges/iterator_t/)
- [ranges::range_reference_tranges::range_const_reference_tranges::range_rvalue_reference_tranges::range_common_reference_t](/cpp/ranges/range_reference_t/)
- [ranges::range_difference_tranges::range_size_tranges::range_value_t](/cpp/ranges/range_size_t/)
