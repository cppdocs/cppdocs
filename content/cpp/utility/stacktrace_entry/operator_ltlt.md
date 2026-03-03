---
title: "std::operator<<(std::stacktrace_entry)"
source_path: "cpp/utility/stacktrace_entry/operator"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

Inserts the description of f into the output stream os. Equivalent to return os << [std::to_string](/cpp/string/basic_string/to_string/)(f);.

## Declarations
```cpp
std::ostream& operator<<( std::ostream& os, const std::stacktrace_entry& f );
```
_(since C++23)_

## Parameters
- `os`: an output stream
- `f`: a stacktrace_entry whose description is to be inserted

## Return value
os

## Example
```cpp
#include <iostream>
#include <stacktrace>
 
int main()
{
    for (const auto& f : std::stacktrace::current())
        std::cout << f << '\n';
}
```

## See also
- [operator<<](/cpp/utility/basic_stacktrace/operator_ltlt/)
