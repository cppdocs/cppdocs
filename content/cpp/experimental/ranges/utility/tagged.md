---
title: "std::experimental::ranges::tagged"
source_path: "cpp/experimental/ranges/utility/tagged"
header: "<experimental/ranges/utility>"
category: "experimental"
---

The class template tagged augments a tuple-like class type Base, which it publicly derives from, with a set of named accessors specified by the tag specifiers Tags.... The tags are applied in order: the i-th tag specifier in Tags... correspond to the i-th element of the tuple.

## Declarations
```cpp
template< class Base, TagSpecifier... Tags >
requires sizeof...(Tags) <= std::tuple_size<Base>::value
struct tagged;
```
_(ranges TS)_

## See also
- [TagSpecifier](/cpp/experimental/ranges/utility/tagspecifier/)
- [tagged_pair](/cpp/experimental/ranges/utility/tagged_pair/)
- [std::pair](/cpp/utility/pair/)
- [make_tagged_pair](/cpp/experimental/ranges/utility/make_tagged_pair/)
- [tagged_tuple](/cpp/experimental/ranges/utility/tagged_tuple/)
- [std::tuple](/cpp/utility/tuple/)
- [make_tagged_tuple](/cpp/experimental/ranges/utility/make_tagged_tuple/)
- [inin1in2outout1out2funminmaxbeginend](/cpp/experimental/ranges/algorithm/tags/)
