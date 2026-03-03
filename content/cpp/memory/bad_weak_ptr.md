---
title: "std::bad_weak_ptr"
source_path: "cpp/memory/bad_weak_ptr"
header: "<memory>"
category: "memory"
since: "C++11"
---

std::bad_weak_ptr is the type of the object thrown as exceptions by the constructors of [std::shared_ptr](/cpp/memory/shared_ptr/) that take [std::weak_ptr](/cpp/memory/weak_ptr/) as the argument, when the [std::weak_ptr](/cpp/memory/weak_ptr/) refers to an already deleted object.

## Declarations
```cpp
class bad_weak_ptr;
```
_(since C++11)_

## Parameters
- `other`: another exception object to copy

## Return value
*this

## Notes
Implementations are allowed but not required to override what().

## Example
```cpp
#include <iostream>
#include <memory>
 
int main()
{
    std::shared_ptr<int> p1(new int(42));
    std::weak_ptr<int> wp(p1);
    p1.reset();
    try
    {
        std::shared_ptr<int> p2(wp);
    }
    catch (const std::bad_weak_ptr& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2376 | C++11 | calling what on a default-constructed bad_weak_ptr was required to return "bad_weak_ptr" | the return value is implementation-defined |

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
- [weak_ptr](/cpp/memory/weak_ptr/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
