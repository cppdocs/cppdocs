---
title: "std::experimental::unique_resource<R, D>::release"
source_path: "cpp/experimental/unique_resource/release"
category: "experimental"
---

Releases the ownership of the managed resource if any. The destructor will not execute the deleter after the call, unless reset is called later for managing new resource.

## Declarations
```cpp
void release() noexcept;
```
_(library fundamentals TS v3)_

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [release](/cpp/memory/unique_ptr/release/)
