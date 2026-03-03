---
title: "std::experimental::unique_resource<R, D>::unique_resource"
source_path: "cpp/experimental/unique_resource/unique_resource"
category: "experimental"
---

Follow items are used for explanatory purpose:

## Declarations
```cpp
unique_resource();
```
_(library fundamentals TS v3)_

```cpp
template< class RR, class DD >
unique_resource( RR&& r, DD&& d ) noexcept(/*see below*/)
```
_(library fundamentals TS v3)_

```cpp
unique_resource( unique_resource&& other );
```
_(library fundamentals TS v3)_

## Parameters
- `r`: a resource handle
- `d`: a deleter to use to dispose the resource
- `other`: another unique_resource to acquire the ownership from

## Notes
The mechanism of these constructors ensures no leaking of resources.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/memory/unique_ptr/unique_ptr/)
