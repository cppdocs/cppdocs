---
title: "std::weak_ptr<T>::lock"
source_path: "cpp/memory/weak_ptr/lock"
category: "memory"
since: "C++11"
---

Creates a new [std::shared_ptr](/cpp/memory/shared_ptr/) that shares ownership of the managed object. If there is no managed object, i.e. *this is empty, then the returned shared_ptr also is empty.

## Declarations
```cpp
std::shared_ptr<T> lock() const noexcept;
```
_(since C++11)_

## Return value
A shared_ptr which shares ownership of the owned object if [std::weak_ptr::expired](/cpp/memory/weak_ptr/expired/) returns false. Else returns default-constructed shared_ptr of type T.

## Notes
Both this function and the constructor of [std::shared_ptr](/cpp/memory/shared_ptr/) may be used to acquire temporary ownership of the managed object referred to by a std::weak_ptr. The difference is that the constructor of [std::shared_ptr](/cpp/memory/shared_ptr/) throws an exception when its std::weak_ptr argument is empty, while std::weak_ptr<T>::lock() constructs an empty std::shared_ptr<T>.

## Example
```cpp
#include <iostream>
#include <memory>
 
void observe(std::weak_ptr<int> weak)
{
    if (auto p = weak.lock())
        std::cout << "\tobserve() is able to lock weak_ptr<>, value=" << *p << '\n';
    else
        std::cout << "\tobserve() is unable to lock weak_ptr<>\n";
}
 
int main()
{
    std::weak_ptr<int> weak;
    std::cout << "weak_ptr<> is not yet initialized\n";
    observe(weak);
 
    {
        auto shared = std::make_shared<int>(42);
        weak = shared;
        std::cout << "weak_ptr<> is initialized with shared_ptr\n";
        observe(weak);
    }
 
    std::cout << "shared_ptr<> has been destructed due to scope exit\n";
    observe(weak);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2316 | C++11 | lock() was not required to be atomic, but required to be noexcept, which led to a contradiction | specified to be atomic |

## See also
- [expired](/cpp/memory/weak_ptr/expired/)
