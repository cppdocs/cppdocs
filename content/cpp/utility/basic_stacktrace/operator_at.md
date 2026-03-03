---
title: "std::basic_stacktrace<Allocator>::operator[]"
source_path: "cpp/utility/basic_stacktrace/operator_at"
category: "utility"
since: "C++23"
---

Returns a reference to the entry at specified location pos. No bounds checking is performed.

## Declarations
```cpp
const_reference operator[]( size_type pos ) const;
```
_(since C++23)_

## Parameters
- `pos`: position of the stacktrace entry to return

## Return value
Reference to the requested entry.

## Example
This section is incompleteReason: no example

## See also
- [at](/cpp/utility/basic_stacktrace/at/)
