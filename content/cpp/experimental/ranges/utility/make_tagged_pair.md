---
title: "std::experimental::ranges::make_tagged_pair"
source_path: "cpp/experimental/ranges/utility/make_tagged_pair"
header: "<experimental/ranges/utility>"
category: "experimental"
---

Convenience function for creating a tagged pair, deducing the element types from the arguments (the tag specifiers must be explicitly specified).

## Declarations
```cpp
template< TagSpecifier Tag1, TagSpecifier Tag2, class T1, class T2 >
constexpr ranges::tagged</*see below*/, Tag1, Tag2> make_tagged_pair( T1&& x, T2&& y );
```
_(ranges TS)_

## Return value
R([std::forward](/cpp/utility/forward/)<T1>(x), [std::forward](/cpp/utility/forward/)<T2>(y)), where R is the return type.

## See also
- [TaggedType](/cpp/experimental/ranges/utility/taggedtype/)
- [tagged](/cpp/experimental/ranges/utility/tagged/)
- [tagged_pair](/cpp/experimental/ranges/utility/tagged_pair/)
- [std::pair](/cpp/utility/pair/)
- [tagged_tuple](/cpp/experimental/ranges/utility/tagged_tuple/)
- [std::tuple](/cpp/utility/tuple/)
- [make_tagged_tuple](/cpp/experimental/ranges/utility/make_tagged_tuple/)
- [inin1in2outout1out2funminmaxbeginend](/cpp/experimental/ranges/algorithm/tags/)
