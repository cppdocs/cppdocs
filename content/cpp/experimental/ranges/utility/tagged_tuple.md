---
title: "std::experimental::ranges::tagged_tuple"
source_path: "cpp/experimental/ranges/utility/tagged_tuple"
header: "<experimental/ranges/tuple>"
category: "experimental"
---

Convenience alias template for naming a ranges::tagged wrapping a [std::tuple](/cpp/utility/tuple/).

## Declarations
```cpp
template< TaggedType... Types >
using tagged_tuple = /* see below */;
```
_(ranges TS)_

## Notes
Because a function type is used to "glue" the tag specifier and the corresponding element type together, the usual parameter type adjustments apply. In particular, top-level cv-qualifiers are removed and array types are adjusted to pointers: tagged_tuple<[tag::in](/cpp/experimental/ranges/algorithm/tags/)(const int* const), [tag::out](/cpp/experimental/ranges/algorithm/tags/)(int[])> is [ranges::tagged](/cpp/experimental/ranges/utility/tagged/)<[std::tuple](/cpp/utility/tuple/)<const int*, int*>, [tag::in](/cpp/experimental/ranges/algorithm/tags/), [tag::out](/cpp/experimental/ranges/algorithm/tags/)>.

## See also
- [TaggedType](/cpp/experimental/ranges/utility/taggedtype/)
- [tagged](/cpp/experimental/ranges/utility/tagged/)
- [tagged_pair](/cpp/experimental/ranges/utility/tagged_pair/)
- [std::pair](/cpp/utility/pair/)
- [make_tagged_pair](/cpp/experimental/ranges/utility/make_tagged_pair/)
- [make_tagged_tuple](/cpp/experimental/ranges/utility/make_tagged_tuple/)
- [inin1in2outout1out2funminmaxbeginend](/cpp/experimental/ranges/algorithm/tags/)
