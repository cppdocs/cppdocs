---
title: "std::visit_format_arg"
source_path: "cpp/utility/format/visit_format_arg"
header: "<format>"
category: "utility"
---

Applies the visitor vis to the object contained in arg.

## Declarations
```cpp
template< class Visitor, class Context >
/* see below */ visit_format_arg( Visitor&& vis, std::basic_format_arg<Context> arg );
```
_(since C++20) (deprecated in C++26)_

## Parameters
- `vis`: a Callable that accepts every possible alternative from arg
- `arg`: a std::basic_format_arg to be visited

## Return value
The value returned by the selected invocation of the visitor.

## Notes
As of C++26, std::visit_format_arg is deprecated in favor of the visit member functions of [std::basic_format_arg](/cpp/utility/format/basic_format_arg/).

## Example
This section is incompleteReason: no example

## See also
- [make_format_argsmake_wformat_args](/cpp/utility/format/make_format_args/)
