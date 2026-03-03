---
title: "std::basic_fstream<CharT,Traits>::native_handle"
source_path: "cpp/io/basic_fstream/native_handle"
category: "io"
since: "C++26"
---

Returns the implementation defined underlying handle associated with basic_filebuf. The behavior is undefined if is_open() is false.

## Declarations
```cpp
native_handle_type native_handle() const noexcept;
```
_(since C++26)_

## Return value
rdbuf()->native_handle()

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_fstream_native_handle
202306L
(C++26)
native handles support

## Example
This section is incompleteReason: example
