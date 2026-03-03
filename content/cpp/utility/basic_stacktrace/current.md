---
title: "std::basic_stacktrace<Allocator>::current"
source_path: "cpp/utility/basic_stacktrace/current"
category: "utility"
since: "C++23"
---

Let s[i] (0 ≤ i < n) denote the (i+1)-th stacktrace entry in the stacktrace of the current evaluation in the current thread of execution, where n is the count of the stacktrace entries in the stackentry.

## Declarations
```cpp
static basic_stacktrace current( const allocator_type& alloc =
allocator_type() ) noexcept;
```
_(since C++23)_

```cpp
static basic_stacktrace current( size_type skip, const allocator_type& alloc =
allocator_type() ) noexcept;
```
_(since C++23)_

```cpp
static basic_stacktrace current( size_type skip, size_type max_depth,
const allocator_type& alloc =
allocator_type() ) noexcept;
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of the constructed basic_stacktrace
- `skip`: the number of stacktrace entries to skip
- `max_depth`: the maximum depth of the stacktrace entries

## Return value
If the allocation succeeds, the basic_stacktrace described above.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/utility/basic_stacktrace/basic_stacktrace/)
- [current](/cpp/utility/source_location/current/)
