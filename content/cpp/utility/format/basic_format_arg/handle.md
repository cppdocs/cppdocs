---
title: "std::basic_format_arg<Context>::handle"
source_path: "cpp/utility/format/basic_format_arg/handle"
header: "<format>"
category: "utility"
since: "C++20"
---

A type-erased wrapper that allows formatting an object of a user-defined type.

## Declarations
```cpp
template< class Context >
class basic_format_arg<Context>::handle;
```
_(since C++20)_

## Notes
A handle has reference semantics for the formatted argument and does not extend its lifetime. It is the programmer's responsibility to ensure that the argument outlives the handle. Usually, a handle is only used within formatting functions.

## See also
- [basic_format_arg](/cpp/utility/format/basic_format_arg/)
- [make_format_argsmake_wformat_args](/cpp/utility/format/make_format_args/)
