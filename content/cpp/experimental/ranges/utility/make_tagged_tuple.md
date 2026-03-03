---
title: "std::experimental::ranges::make_tagged_tuple"
source_path: "cpp/experimental/ranges/utility/make_tagged_tuple"
header: "<experimental/ranges/tuple>"
category: "experimental"
---

Convenience function for creating a tagged tuple, deducing the element types from the arguments (the tag specifiers must be explicitly specified).

## Declarations
```cpp
template< TagSpecifier... Tags, class... Types >
requires sizeof...(Tags) == sizeof...(Types)
constexpr ranges::tagged</*see below*/, Tags...> make_tagged_tuple( Types&&... t );
```
_(ranges TS)_

## Return value
R([std::forward](/cpp/utility/forward/)<Types>(t)...), where R is the return type.

## See also
- [TaggedType](/cpp/experimental/ranges/utility/taggedtype/)
- [tagged](/cpp/experimental/ranges/utility/tagged/)
- [tagged_pair](/cpp/experimental/ranges/utility/tagged_pair/)
- [std::pair](/cpp/utility/pair/)
- [make_tagged_pair](/cpp/experimental/ranges/utility/make_tagged_pair/)
- [tagged_tuple](/cpp/experimental/ranges/utility/tagged_tuple/)
- [std::tuple](/cpp/utility/tuple/)
- [inin1in2outout1out2funminmaxbeginend](/cpp/experimental/ranges/algorithm/tags/)
