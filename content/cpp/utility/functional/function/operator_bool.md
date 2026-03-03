---
title: "std::function<R(Args...)>::operator bool"
source_path: "cpp/utility/functional/function/operator_bool"
category: "utility"
since: "C++11"
---

Checks whether *this stores a callable function target, i.e. is not empty.

## Declarations
```cpp
explicit operator bool() const noexcept;
```
_(since C++11)_

## Return value
true if *this stores a callable function target, false otherwise.

## Example
```cpp
#include <functional>
#include <iostream>
 
void sampleFunction()
{
    std::cout << "This is the sample function!\n";
}
 
void checkFunc(std::function<void()> const& func)
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
    std::function<void()> f1;
    std::function<void()> f2(sampleFunction);
 
    std::cout << "f1: ";
    checkFunc(f1);
 
    std::cout << "f2: ";
    checkFunc(f2);
}
```

## See also
- [operator bool](/cpp/utility/functional/move_only_function/operator_bool/)
