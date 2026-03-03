---
title: "std::experimental::unique_resource<R, D>::reset"
source_path: "cpp/experimental/unique_resource/reset"
category: "experimental"
---

1) Disposes the resource by calling the deleter with the underlying resource handle if the unique_resource owns it. The unique_resource does not own the resource after the call.

## Declarations
```cpp
void reset() noexcept;
```
_(library fundamentals TS v3)_

```cpp
template< class RR >
void reset( RR&& r );
```
_(library fundamentals TS v3)_

## Parameters
- `r`: resource handle for a new resource to manage

## Return value
(none)

## Notes
The mechanism ensures no leaking of resources.

## Example
This section is incompleteReason: no example

## See also
- [reset](/cpp/memory/unique_ptr/reset/)
