---
title: "std::shared_ptr<T>::operator bool"
source_path: "cpp/memory/shared_ptr/operator_bool"
category: "memory"
---

Checks if *this stores a non-null pointer, i.e. whether get() != nullptr.

## Declarations
```cpp
explicit operator bool() const noexcept;
```

## Return value
true if *this stores a pointer, false otherwise.

## Notes
An empty shared_ptr (where use_count() == 0) may store a non-null pointer accessible by [get()](/cpp/memory/shared_ptr/get/), e.g. if it were created using the aliasing constructor.

## Example
```cpp
#include <iostream>
#include <memory>
 
void report(std::shared_ptr<int> ptr) 
{
    if (ptr)
        std::cout << "*ptr=" << *ptr << "\n";
    else
        std::cout << "ptr is not a valid pointer.\n";
}
 
int main()
{
    std::shared_ptr<int> ptr;
    report(ptr);
 
    ptr = std::make_shared<int>(7);
    report(ptr);
}
```

## See also
- [get](/cpp/memory/shared_ptr/get/)
