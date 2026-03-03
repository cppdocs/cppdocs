---
title: "std::tuple_element<std::experimental::ranges::tagged>"
source_path: "cpp/experimental/ranges/utility/tagged/tuple_element"
category: "experimental"
---

The partial specialization of [std::tuple_element](/cpp/utility/tuple_element/) for tagged provide compile-time access to the types of the tagged's elements, using tuple-like syntax. It simply forwards to [std::tuple_element](/cpp/utility/tuple_element/)<N, Base>.

## Declarations
```cpp
template< std::size_t N, class Base, class... Tags >
struct tuple_element<N, std::experimental::ranges::tagged<Base, Tags...>>
: std::tuple_element<N, Base> {};
```
_(ranges TS)_

## See also
- [std::tuple_element<std::tuple>](/cpp/utility/tuple/tuple_element/)
- [std::tuple_element<std::array>](/cpp/container/array/tuple_element/)
- [std::tuple_element<std::pair>](/cpp/utility/pair/tuple_element/)
- [std::tuple_size<std::experimental::ranges::tagged>](/cpp/experimental/ranges/utility/tagged/tuple_size/)
