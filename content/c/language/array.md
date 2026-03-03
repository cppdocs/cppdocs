---
title: "Array declaration"
source_path: "c/language/array"
category: "c"
---

Array is a type consisting of a contiguously allocated nonempty sequence of objects with a
particular element type. The number of those objects (the array size) never changes during the array lifetime.

## Notes
Zero-length array declarations are not allowed, even though some compilers offer them as extensions (typically as a pre-C99 implementation of [flexible array members](/c/language/struct/)).

If the size expression of a VLA has side effects, they are guaranteed to be produced except when it is a part of a sizeof expression whose result doesn't depend on it:

## See also
- [C++ documentation](/cpp/language/array/)
