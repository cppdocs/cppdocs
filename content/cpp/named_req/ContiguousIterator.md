---
title: "C++ named requirements: LegacyContiguousIterator (since C++17)"
source_path: "cpp/named_req/ContiguousIterator"
category: "named_req"
since: "C++17"
---

A LegacyContiguousIterator is a [LegacyIterator](/cpp/named_req/iterator/) whose logically adjacent elements are also physically adjacent in memory.

## Notes
[Fancy pointer](/cpp/named_req/allocator/#Fancy_pointers) to object types are also required to satisfy LegacyContiguousIterator.

LegacyContiguousIterator is replaced with the [contiguous_iterator](/cpp/iterator/contiguous_iterator/) concept: iterator types in the standard library that are required to satisfy LegacyContiguousIterator in C++17 are required to model contiguous_iterator in C++20.

## See also
- [contiguous_iterator](/cpp/iterator/contiguous_iterator/)
- [random_access_iterator](/cpp/iterator/random_access_iterator/)
- [Iterator library](/cpp/iterator/)
