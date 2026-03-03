---
title: "std::experimental::ranges::tagged_pair"
source_path: "cpp/experimental/ranges/utility/tagged_pair"
header: "<experimental/ranges/utility>"
category: "experimental"
---

Convenience alias template for naming a ranges::tagged wrapping a [std::pair](/cpp/utility/pair/).

## Declarations
```cpp
template< TaggedType T1, TaggedType T2 >
using tagged_pair = /* see below */;
```
_(ranges TS)_

## Notes
Because a function type is used to "glue" the tag specifier and the corresponding element type together, the usual parameter type adjustments apply. In particular, top-level cv-qualifiers are removed and array types are adjusted to pointers: tagged_pair<[tag::in](/cpp/experimental/ranges/algorithm/tags/)(const int* const), [tag::out](/cpp/experimental/ranges/algorithm/tags/)(int[])> is [ranges::tagged](/cpp/experimental/ranges/utility/tagged/)<[std::pair](/cpp/utility/pair/)<const int*, int*>, [tag::in](/cpp/experimental/ranges/algorithm/tags/), [tag::out](/cpp/experimental/ranges/algorithm/tags/)>.

## See also
- [TaggedType](/cpp/experimental/ranges/utility/taggedtype/)
- [tagged](/cpp/experimental/ranges/utility/tagged/)
- [make_tagged_pair](/cpp/experimental/ranges/utility/make_tagged_pair/)
- [tagged_tuple](/cpp/experimental/ranges/utility/tagged_tuple/)
- [std::tuple](/cpp/utility/tuple/)
- [make_tagged_tuple](/cpp/experimental/ranges/utility/make_tagged_tuple/)
- [inin1in2outout1out2funminmaxbeginend](/cpp/experimental/ranges/algorithm/tags/)
