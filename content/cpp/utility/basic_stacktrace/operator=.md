---
title: "std::basic_stacktrace<Allocator>::operator="
source_path: "cpp/utility/basic_stacktrace/operator"
category: "utility"
since: "C++23"
---

Replaces the contents of the basic_stacktrace.

## Declarations
```cpp
basic_stacktrace& operator=( const basic_stacktrace& other );
```
_(since C++23)_

```cpp
basic_stacktrace& operator=( basic_stacktrace&& other )
noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `other`: another basic_stacktrace to use as source

## Return value
*this

## Notes
After container move assignment (overload (2)), unless element-wise move assignment is forced by incompatible allocators, references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/utility/basic_stacktrace/basic_stacktrace/)
