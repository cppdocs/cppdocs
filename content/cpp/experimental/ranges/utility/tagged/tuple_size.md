---
title: "std::tuple_size<std::experimental::ranges::tagged>"
source_path: "cpp/experimental/ranges/utility/tagged/tuple_size"
category: "experimental"
---

The partial specialization of [std::tuple_size](/cpp/utility/tuple_size/) for tagged provides the ability to obtain the number of elements in a tagged object using tuple-like syntax. It simply forwards to [std::tuple_size](/cpp/utility/tuple_size/)<Base>.

## Declarations
```cpp
template< class Base, class... Tags >
struct tuple_size<std::experimental::ranges::tagged<Base, Tags...>>
: std::tuple_size<Base> {};
```
_(ranges TS)_

## See also
- [std::tuple_size<std::tuple>](/cpp/utility/tuple/tuple_size/)
- [std::tuple_size<std::array>](/cpp/container/array/tuple_size/)
- [std::tuple_size<std::pair>](/cpp/utility/pair/tuple_size/)
- [std::tuple_element<std::experimental::ranges::tagged>](/cpp/experimental/ranges/utility/tagged/tuple_element/)
