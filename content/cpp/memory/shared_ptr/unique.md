---
title: "std::shared_ptr<T>::unique"
source_path: "cpp/memory/shared_ptr/unique"
category: "memory"
---

Checks if *this is the only shared_ptr instance managing the current object, i.e. whether use_count() == 1.

## Declarations
```cpp
bool unique() const noexcept;
```
_(deprecated in C++17) (removed in C++20)_

## Return value
true if *this is the only shared_ptr instance managing the current object, false otherwise.

## Notes
This function was deprecated in C++17 and removed in C++20 because use_count() == 1 is meaningless in multithreaded environment (see [Notes](/cpp/memory/shared_ptr/use_count/#Notes) in [use_count](/cpp/memory/shared_ptr/use_count/)).

## Example
```cpp
#include <iostream> 
#include <memory> 
 
int main() 
{ 
    auto sp1 = std::make_shared<int>(5);
    std::cout << std::boolalpha;
    std::cout << "sp1.unique() == " << sp1.unique() << '\n'; 
 
    std::shared_ptr<int> sp2 = sp1; 
    std::cout << "sp1.unique() == " << sp1.unique() << '\n'; 
}
```

## See also
- [use_count](/cpp/memory/shared_ptr/use_count/)
