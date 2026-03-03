---
title: "swap(std::move_only_function)"
source_path: "cpp/utility/functional/move_only_function/swap2"
category: "utility"
since: "C++23"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for std::move_only_function. Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
friend void swap( std::move_only_function& lhs, std::move_only_function& rhs ) noexcept;
```
_(since C++23)_

## Parameters
- `lhs, rhs`: std::move_only_function objects whose states to swap

## Return value
(none)

## Example
```cpp
#include <concepts>
#include <functional>
#include <iostream>
 
void foo(const char* str, int x)
{
    std::cout << "foo(\"" << str << "\", " << x << ")\n";
}
 
void bar(const char* str, int x)
{
    std::cout << "bar(\"" << str << "\", " << x << ")\n";
}
 
int main()
{
    std::move_only_function<void(const char*, int) const> f1{foo};
    std::move_only_function<void(const char*, int) const> f2{bar};
 
    f1("f1", 1);
    f2("f2", 2);
 
    std::cout << "std::ranges::swap(f1, f2);\n";
    std::ranges::swap(f1, f2); // finds the hidden friend
 
    f1("f1", 1);
    f2("f2", 2);
}
```

## See also
- [swap](/cpp/utility/functional/move_only_function/swap/)
- [std::swap(std::function)](/cpp/utility/functional/function/swap2/)
- [std::swap](/cpp/utility/swap/)
