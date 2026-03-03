---
title: "std::operator<<(std::basic_stacktrace)"
source_path: "cpp/utility/basic_stacktrace/operator"
header: "<stacktrace>"
category: "utility"
since: "C++23"
---

Inserts the description of st into the output stream os. Equivalent to return os << [std::to_string](/cpp/string/basic_string/to_string/)(st);.

## Declarations
```cpp
template< class Allocator >
std::ostream& operator<<( std::ostream& os, const std::basic_stacktrace<Allocator>& st );
```
_(since C++23)_

## Parameters
- `os`: an output stream
- `st`: a basic_stacktrace whose description is to be inserted

## Return value
os.

## Example
```cpp
#include <stacktrace>
#include <iostream>
 
int main()
{
    std::cout << "The stacktrace obtained in the main function:\n";
    std::cout << std::stacktrace::current() << '\n';
    []{
        std::cout << "The stacktrace obtained in a nested lambda:\n";
        std::cout << std::stacktrace::current() << '\n';
    }();
}
```

## See also
- [operator<<](/cpp/utility/stacktrace_entry/operator_ltlt/)
