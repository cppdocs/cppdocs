---
title: "deduction guides for std::stop_callback"
source_path: "cpp/thread/stop_callback/deduction_guides"
header: "<stop_token>"
category: "thread"
since: "C++20"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::stop_callback](/cpp/thread/stop_callback/) to permit deduction from argument of invocable types.

## Declarations
```cpp
template< class Callback >
stop_callback( std::stop_token, Callback ) -> stop_callback<Callback>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example
