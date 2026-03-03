---
title: "tuple-like, pair-like"
source_path: "cpp/utility/tuple/tuple-like"
category: "utility"
---

1) A type T models and satisfies the concept tuple-like if [std::remove_cvref_t](/cpp/types/remove_cvref/)<T> is a specialization of
[std::array](/cpp/container/array/),
[std::complex](/cpp/numeric/complex/),
(since C++26)
[std::pair](/cpp/utility/pair/),[std::tuple](/cpp/utility/tuple/), or[std::ranges::subrange](/cpp/ranges/subrange/).

## Declarations
```cpp
template< class T >
concept tuple-like = /* see below */;
```
_(since C++23) (exposition only*)_

```cpp
template< class T >
concept pair-like =
tuple-like<T> && std::tuple_size_v<std::remove_cvref_t<T>> == 2;
```
_(since C++23) (exposition only*)_

## Notes
tuple-like types implement the tuple protocol, i.e., such types can be used with [std::get](/cpp/utility/tuple/get/), [std::tuple_element](/cpp/utility/tuple_element/) and [std::tuple_size](/cpp/utility/tuple_size/).

Elements of tuple-like types can be bound with [structured binding](/cpp/language/structured_binding/#Case_2:_binding_a_tuple-like_type).

## See also
- [(constructor)](/cpp/utility/tuple/tuple/)
- [operator=](/cpp/utility/tuple/operator/)
- [operator==operator!=operator<operator<=operator>operator>=operator<=>](/cpp/utility/tuple/operator_cmp/)
- [std::basic_common_reference<tuple-like>](/cpp/utility/tuple/basic_common_reference/)
- [std::common_type<tuple-like>](/cpp/utility/tuple/common_type/)
- [tuple_cat](/cpp/utility/tuple/tuple_cat/)
- [apply](/cpp/utility/apply/)
- [make_from_tuple](/cpp/utility/make_from_tuple/)
- [(constructor)](/cpp/utility/pair/pair/)
- [operator=](/cpp/utility/pair/operator/)
- [operator PairLike](/cpp/ranges/subrange/operator_pairlike/)
- [ranges::elements_viewviews::elements](/cpp/ranges/elements_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
