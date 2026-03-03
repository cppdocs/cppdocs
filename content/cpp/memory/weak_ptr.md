---
title: "std::weak_ptr"
source_path: "cpp/memory/weak_ptr"
header: "<memory>"
category: "memory"
since: "C++11"
---

std::weak_ptr is a smart pointer that holds a non-owning ("weak") reference to an object that is managed by [std::shared_ptr](/cpp/memory/shared_ptr/). It must be converted to [std::shared_ptr](/cpp/memory/shared_ptr/) in order to access the referenced object.

## Declarations
```cpp
template< class T > class weak_ptr;
```
_(since C++11)_

## Notes
Like [std::shared_ptr](/cpp/memory/shared_ptr/), a typical implementation of weak_ptr stores two pointers:

A separate stored pointer is necessary to ensure that converting a shared_ptr to weak_ptr and then back works correctly, even for aliased shared_ptrs. It is not possible to access the stored pointer in a weak_ptr without locking it into a shared_ptr.

## Example
```cpp
#include <iostream>
#include <memory>
 
std::weak_ptr<int> gw;
 
void observe()
{
    std::cout << "gw.use_count() == " << gw.use_count() << "; ";
    // we have to make a copy of shared pointer before usage:
    if (std::shared_ptr<int> spt = gw.lock())
        std::cout << "*spt == " << *spt << '\n';
    else
        std::cout << "gw is expired\n";
}
 
int main()
{
    {
        auto sp = std::make_shared<int>(42);
        gw = sp;
 
        observe();
    }
 
    observe();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3001 | C++17 | element_type was not updated for array support | updated |

## See also
- [unique_ptr](/cpp/memory/unique_ptr/)
- [shared_ptr](/cpp/memory/shared_ptr/)
