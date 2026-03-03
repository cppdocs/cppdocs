---
title: "std::formatter<std::thread::id>"
source_path: "cpp/thread/thread/id/formatter"
header: "<thread>"
category: "thread"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for the [std::thread::id](/cpp/thread/thread/id/) class allows users to convert a thread identifier to its textual representation using [formatting functions](/cpp/utility/format/).

## Declarations
```cpp
template< class CharT >
struct formatter<std::thread::id, CharT>;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_formatters
202302L
(C++23)
Formatting std::thread::id and std::stacktrace

## Example
```cpp
#include <format>
#include <iostream>
#include <thread>
 
int main()
{
    std::thread::id this_id = std::this_thread::get_id();
    std::thread::id null_id;
 
    std::cout << std::format("current thread id: {}\n", this_id);
    std::cout << std::format("{:=^10}\n", null_id);
}
```

## See also
- [formatter](/cpp/utility/format/formatter/)
