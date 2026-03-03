---
title: "std::unique_ptr<T,Deleter>::operator bool"
source_path: "cpp/memory/unique_ptr/operator_bool"
category: "memory"
---

Checks whether *this owns an object, i.e. whether [get()](/cpp/memory/unique_ptr/get/) != nullptr.

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++11) (constexpr since C++23)_

## Return value
true if *this owns an object, false otherwise.

## Example
```cpp
#include <iostream>
#include <memory>
 
int main()
{
    std::unique_ptr<int> ptr(new int(42));
 
    if (ptr)
        std::cout << "before reset, ptr is: " << *ptr << '\n';
    ptr.reset();
    (ptr ? (std::cout << "after reset, ptr is: " << *ptr)
        : (std::cout << "after reset ptr is empty")) << '\n';
}
```

## See also
- [get](/cpp/memory/unique_ptr/get/)
