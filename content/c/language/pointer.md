---
title: "Pointer declaration"
source_path: "c/language/pointer"
category: "c"
---

Pointer is a type of an object that refers to a function or an object of another type, possibly adding qualifiers. Pointer may also refer to nothing, which is indicated by the special null pointer value.

## Notes
Although any pointer to object [can be cast](/c/language/cast/) to pointer to object of a different type, dereferencing a pointer to the type different from the declared type of the object is almost always undefined behavior. See [strict aliasing](/c/language/object/#Strict_aliasing) for details.

It is possible to indicate to a function that accesses objects through pointers that those pointers do not alias. See [restrict](/c/language/restrict/) for details.

lvalue expressions of array type, when used in most contexts, undergo an [implicit conversion](/c/language/conversion/) to the pointer to the first element of the array. See [array](/c/language/array/#Array_to_pointer_conversion) for details.

Pointers to char are often [used to represent strings](/c/string/byte/). To represent a valid byte string, a pointer must be pointing at a char that is an element of an array of char, and there must be a char with the value zero at some index greater or equal to the index of the element referenced by the pointer.

## See also
- [C++ documentation](/cpp/language/pointer/)
