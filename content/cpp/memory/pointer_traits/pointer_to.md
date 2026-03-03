---
title: "std::pointer_traits<Ptr>::pointer_to"
source_path: "cpp/memory/pointer_traits/pointer_to"
header: "<memory>"
category: "memory"
---

Constructs a dereferenceable pointer or pointer-like object (["fancy pointer"](/cpp/named_req/allocator/#Fancy_pointers)) to its argument.

## Declarations
```cpp
static pointer
pointer_to( element_type& r );
```
_(since C++11) (member of pointer_traits<Ptr> specialization)_

```cpp
static pointer
pointer_to( element_type& r ) noexcept;
```
_(since C++11) (until C++20) (member of pointer_traits<T*> specialization)_

```cpp
static constexpr pointer
pointer_to( element_type& r ) noexcept;
```
_(since C++20) (member of pointer_traits<T*> specialization)_

## Parameters
- `r`: reference to an object of type element_type&, except if element_type is void, in which case the type of r is unspecified

## Return value
A dereferenceable pointer to r, of the type pointer_traits<>::pointer.

## Notes
The [Boost.Intrusive library version](https://www.boost.org/doc/libs/release/doc/html/boost/intrusive/pointer_traits.html) of this function returns pointer([std::addressof](/cpp/memory/addressof/)(r)) if Ptr::pointer_to does not exist.

## See also
- [addressof](/cpp/memory/addressof/)
- [address](/cpp/memory/allocator/address/)
- [to_address](/cpp/memory/pointer_traits/to_address/)
- [to_address](/cpp/memory/to_address/)
