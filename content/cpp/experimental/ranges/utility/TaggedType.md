---
title: "std::experimental::ranges::TaggedType"
source_path: "cpp/experimental/ranges/utility/TaggedType"
header: "<experimental/ranges/utility>"
category: "experimental"
---

The concept TaggedType<T> is satisfied if and only if T is a unary function type of the form R(A), where R is a [TagSpecifier](/cpp/experimental/ranges/utility/tagspecifier/).

## Declarations
```cpp
template< class T >
concept bool TaggedType = /* implementation-defined */;
```
_(ranges TS)_

## See also
- [tagged_tuple](/cpp/experimental/ranges/utility/tagged_tuple/)
- [std::tuple](/cpp/utility/tuple/)
- [tagged_pair](/cpp/experimental/ranges/utility/tagged_pair/)
- [std::pair](/cpp/utility/pair/)
- [inin1in2outout1out2funminmaxbeginend](/cpp/experimental/ranges/algorithm/tags/)
