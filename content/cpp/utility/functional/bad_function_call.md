---
title: "std::bad_function_call"
source_path: "cpp/utility/functional/bad_function_call"
header: "<functional>"
category: "utility"
---

std::bad_function_call is the type of the exception thrown by [std::function::operator()](/cpp/utility/functional/function/operator/) if the function wrapper has no target.

## Declarations
```cpp
class bad_function_call;
```

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().

## Example
```cpp
#include <functional>
#include <iostream>
 
int main()
{
    std::function<int()> f = nullptr;
    try
    {
        f();
    }
    catch (const std::bad_function_call& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2233 | C++11 | what() always returned the same explanatorystring as std::exception::what() | returns its ownexplanatory string |

## See also
- [function](/cpp/utility/functional/function/)
