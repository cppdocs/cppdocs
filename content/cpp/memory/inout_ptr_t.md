---
title: "std::inout_ptr_t"
source_path: "cpp/memory/inout_ptr_t"
header: "<memory>"
category: "memory"
since: "C++23"
---

inout_ptr_t is used to adapt types such as smart pointers for foreign functions that reset ownership via a Pointer* (usually T** for some object type T) or void** parameter.

## Declarations
```cpp
template< class Smart, class Pointer, class... Args >
class inout_ptr_t;
```
_(since C++23)_

## Notes
inout_ptr_t expects that the foreign functions release the ownership represented by the value of the pointed-to Pointer, and then re-initialize it. As such operation requires unique ownership, the usage with [std::shared_ptr](/cpp/memory/shared_ptr/) is forbidden.

The typical usage of inout_ptr_t is creating its temporary objects by std::inout_ptr, which resets the adapted smart pointer immediately. E.g. given a setter function and a smart pointer of appropriate type declared with int foreign_resetter(T**); and [std::unique_ptr](/cpp/memory/unique_ptr/)<T, D> up; respectively,

is roughly equivalent to

It is not recommended to create an inout_ptr_t object of a [storage duration](/cpp/language/storage_duration/) other than automatic storage duration, because such code is likely to produce dangling references and result in undefined behavior on destruction.

Captured arguments are typically packed into a [std::tuple](/cpp/utility/tuple/)<Args...>. Implementations may use different mechanism to provide the Pointer or void* object they need hold.

## Example
This section is incompleteReason: no example

## See also
- [out_ptr_t](/cpp/memory/out_ptr_t/)
- [unique_ptr](/cpp/memory/unique_ptr/)
- [shared_ptr](/cpp/memory/shared_ptr/)
