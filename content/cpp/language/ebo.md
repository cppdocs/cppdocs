---
title: "Empty base optimization"
source_path: "cpp/language/ebo"
category: "language"
---

Allows the size of an empty base subobject to be zero.

## Notes
Empty base optimization is commonly used by allocator-aware standard library classes ([std::vector](/cpp/container/vector/), [std::function](/cpp/utility/functional/function/), [std::shared_ptr](/cpp/memory/shared_ptr/), etc) to avoid occupying any additional storage for its allocator member if the allocator is stateless. This is achieved by storing one of the required data members (e.g., begin, end, or capacity pointer for the vector) in an equivalent of [boost::compressed_pair](https://www.boost.org/doc/libs/release/libs/utility/doc/html/utility/utilities/compressed_pair.html) with the allocator.
