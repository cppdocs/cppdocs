---
title: "std::basic_stacktrace<Allocator>::basic_stacktrace"
source_path: "cpp/utility/basic_stacktrace/basic_stacktrace"
category: "utility"
since: "C++23"
---

Constructs an empty basic_stacktrace, or copy/move from other.

## Declarations
```cpp
basic_stacktrace() noexcept(/* see below */);
```
_(since C++23)_

```cpp
explicit basic_stacktrace( const allocator_type& alloc ) noexcept;
```
_(since C++23)_

```cpp
basic_stacktrace( const basic_stacktrace& other );
```
_(since C++23)_

```cpp
basic_stacktrace( basic_stacktrace&& other ) noexcept;
```
_(since C++23)_

```cpp
basic_stacktrace( const basic_stacktrace& other,
const allocator_type& alloc );
```
_(since C++23)_

```cpp
basic_stacktrace( basic_stacktrace&& other, const allocator_type& alloc );
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of the constructed basic_stacktrace
- `other`: another basic_stacktrace to copy/move from

## Notes
After container move construction (overload (4)), references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

## Example
This section is incompleteReason: no example

## See also
- [operator=](/cpp/utility/basic_stacktrace/operator/)
- [current](/cpp/utility/basic_stacktrace/current/)
