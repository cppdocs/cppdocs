---
title: "std::experimental::future<T>::then"
source_path: "cpp/experimental/future/then"
category: "experimental"
---

Attach the continuation func to *this. The behavior is undefined if *this has no associated shared state (i.e., valid() == false).

## Declarations
```cpp
template< class F >
future</* see below */> then( F&& func ) ;
```

## Parameters
- `func`: a continuation to be attached

## Return value
A std::experimental::future object associated with the shared state created by this object. valid() == true for the returned object.

## Example
This section is incompleteReason: no example
