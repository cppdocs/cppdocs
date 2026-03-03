---
title: "std::weak_ptr<T>::use_count"
source_path: "cpp/memory/weak_ptr/use_count"
category: "memory"
since: "C++11"
---

Returns the number of shared_ptr instances that share ownership of the managed object, or 0 if the managed object has already been deleted, i.e. *this is empty.

## Declarations
```cpp
long use_count() const noexcept;
```
_(since C++11)_

## Return value
The number of shared_ptr instances sharing the ownership of the managed object at the instant of the call.

## Notes
The usage and behavior of this function are similar to [std::shared_ptr::use_count](/cpp/memory/shared_ptr/use_count/), but it returns a different count.

## Example
```cpp
#include <iostream>
#include <memory>
 
std::weak_ptr<int> gwp;
 
void observe_gwp()
{
    std::cout << "use_count(): " << gwp.use_count() << "\t id: ";
    if (auto sp = gwp.lock())
        std::cout << *sp << '\n';
    else
        std::cout << "??\n";
}
 
void share_recursively(std::shared_ptr<int> sp, int depth)
{
    observe_gwp(); // : 2 3 4
    if (1 < depth)
        share_recursively(sp, depth - 1);
    observe_gwp(); // : 4 3 2
}
 
int main()
{
    observe_gwp();
    {
        auto sp = std::make_shared<int>(42);
        gwp = sp;
        observe_gwp(); // : 1
        share_recursively(sp, 3); // : 2 3 4 4 3 2
        observe_gwp(); // : 1
    }
    observe_gwp(); // : 0
}
```

## See also
- [expired](/cpp/memory/weak_ptr/expired/)
