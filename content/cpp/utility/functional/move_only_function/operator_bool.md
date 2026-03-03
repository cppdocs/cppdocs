---
title: "std::move_only_function::operator bool"
source_path: "cpp/utility/functional/move_only_function/operator_bool"
category: "utility"
since: "C++23"
---

Checks whether *this stores a callable target, i.e. is not empty.

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++23)_

## Return value
true if *this stores a callable target, false otherwise.

## Example
```cpp
#include <functional>
#include <iostream>
 
void sampleFunction()
{
    std::cout << "This is the sample function!\n";
}
 
void checkFunc(std::move_only_function<void() const> const& func)
{
    // Use operator bool to determine if callable target is available.
    if (func)
    {
        std::cout << "Function is not empty! Calling function.\n";
        func();
    }
    else
        std::cout << "Function is empty. Nothing to do.\n";
}
 
int main()
{
    std::move_only_function<void() const> f1{};
    std::move_only_function<void() const> f2{sampleFunction};
 
    std::cout << "f1: ";
    checkFunc(f1);
 
    std::cout << "f2: ";
    checkFunc(f2);
}
```

## See also
- [operator==](/cpp/utility/functional/move_only_function/operator/)
- [operator bool](/cpp/utility/functional/function/operator_bool/)
