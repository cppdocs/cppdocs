---
title: "std::shared_ptr<T>::use_count"
source_path: "cpp/memory/shared_ptr/use_count"
category: "memory"
---

Returns the number of different shared_ptr instances (*this included) managing the current object. If there is no managed object, 0 is returned.

## Declarations
```cpp
long use_count() const noexcept;
```

## Return value
The number of [std::shared_ptr](/cpp/memory/shared_ptr/) instances managing the current object or 0 if there is no managed object.

## Notes
Common use cases include

In multithreaded environment

The value returned by use_count should be considered approximate, as the number of shared owners might change in other threads between the atomic retrieval and meaningful use of the value. When use_count returns 1, it does not imply that the object is safe to modify because accesses to the managed object by former shared owners may not have completed, and because new shared owners may be introduced concurrently, such as by [std::weak_ptr::lock](/cpp/memory/weak_ptr/lock/). Only when use_count returns 0 is the count accurate.

## Example
```cpp
#include <iostream>
#include <memory>
 
void fun(std::shared_ptr<int> sp)
{
    std::cout << "in fun(): sp.use_count() == " << sp.use_count()
              << " (object @ " << sp << ")\n";
}
 
int main()
{
    auto sp1 = std::make_shared<int>(5);
    std::cout << "in main(): sp1.use_count() == " << sp1.use_count()
              << " (object @ " << sp1 << ")\n";
 
    fun(sp1);
}
```

## See also
- [unique](/cpp/memory/shared_ptr/unique/)
