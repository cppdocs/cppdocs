---
title: "std::experimental::unique_resource"
source_path: "cpp/experimental/unique_resource"
header: "<experimental/scope>"
category: "experimental"
---

unique_resource is universal RAII wrapper for resource handles that owns and manages a resource through a handle and disposes of that resource when the unique_resource is destroyed.

## Declarations
```cpp
template< class R, class D >
class unique_resource;
```
_(library fundamentals TS v3)_

## Notes
Resource handle types satisfying [NullablePointer](/cpp/named_req/nullablepointer/) can also be managed by [std::unique_ptr](/cpp/memory/unique_ptr/). Unlike unique_ptr, unique_resource does not require [NullablePointer](/cpp/named_req/nullablepointer/).

## Example
This section is incompleteReason: no example

## See also
- [unique_ptr](/cpp/memory/unique_ptr/)
