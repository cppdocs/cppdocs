---
title: "std::experimental::unique_resource<R, D>::~unique_resource"
source_path: "cpp/experimental/unique_resource/~unique_resource"
category: "experimental"
---

Disposes the resource by calling the deleter with the underlying resource handle if the unique_resource owns it, equivalent to calling reset(). Then destroys the stored resource handle and the deleter.

## Declarations
```cpp
~unique_resource();
```
_(library fundamentals TS v3)_

## See also
- [reset](/cpp/experimental/unique_resource/reset/)
- [(destructor)](/cpp/memory/unique_ptr/~unique_ptr/)
