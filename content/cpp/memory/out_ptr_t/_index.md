---
title: "std::out_ptr_t"
source_path: "cpp/memory/out_ptr_t"
header: "<memory>"
---

out_ptr_t is used to adapt types such as smart pointers for foreign functions that output their results via a Pointer* (usually T** for some object type T) or void** parameter.

## Declarations
```cpp
template< class Smart, class Pointer, class... Args >
class out_ptr_t;
```
_(since C++23)_

## Notes
out_ptr_t expects that the foreign functions do not used the value of the pointed-to Pointer, and only re-initialize it. The value of the smart pointer before adaption is not used.

The typical usage of out_ptr_t is creating its temporary objects by std::out_ptr, which resets the adapted smart pointer immediately. E.g. given a setter function and a smart pointer of appropriate type declared with int foreign_setter(T**); and [std::unique_ptr](/cpp/memory/unique_ptr/)<T, D> up; respectively,

is roughly equivalent to

It is not recommended to create an out_ptr_t object of a [storage duration](/cpp/language/storage_duration/) other than automatic storage duration, because such code is likely to produce dangling references and result in undefined behavior on destruction.

out_ptr_t forbids the usage that would reset a [std::shared_ptr](/cpp/memory/shared_ptr/) without specifying a deleter, because it would call [std::shared_ptr::reset](/cpp/memory/shared_ptr/reset/) and replace a custom deleter later.

Captured arguments are typically packed into a [std::tuple](/cpp/utility/tuple/)<Args...>. Implementations may use different mechanism to provide the Pointer or void* object they need hold.

## Example
This section is incompleteReason: no example

## See also
- [inout_ptr_t](/cpp/memory/inout_ptr_t/)
- [unique_ptr](/cpp/memory/unique_ptr/)
- [shared_ptr](/cpp/memory/shared_ptr/)
