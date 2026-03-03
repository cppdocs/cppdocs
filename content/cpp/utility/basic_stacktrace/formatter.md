---
title: "std::formatter<std::basic_stacktrace>"
source_path: "cpp/utility/basic_stacktrace/formatter"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for std::basic_stacktrace<Allocator> allows users to convert a stacktrace object to string using [formatting functions](/cpp/utility/format/) such as [std::format](/cpp/utility/format/format/).

## Declarations
```cpp
template< class Allocator >
struct formatter<std::basic_stacktrace<Allocator>>;
```
_(since C++23)_

## Example
```cpp
#include <format>
#include <iostream>
#include <stacktrace>
 
int main()
{
    auto trace = std::stacktrace::current();
    std::cout << std::format("{}\n", trace);
}
```

## See also
- [formatter](/cpp/utility/format/formatter/)
- [print](/cpp/io/print/)
- [stdout](/cpp/io/c/std_streams/)
- [formatted](/cpp/utility/format/)
