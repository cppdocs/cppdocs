---
title: "std::swap(std::function)"
source_path: "cpp/utility/functional/function/swap2"
header: "<functional>"
category: "utility"
since: "C++11"
---

Overloads the [std::swap](/cpp/utility/swap/) algorithm for [std::function](/cpp/utility/functional/function/). Exchanges the state of lhs with that of rhs. Effectively calls lhs.swap(rhs).

## Declarations
```cpp
template< class R, class... Args >
void swap( std::function<R(Args...)>& lhs, std::function<R(Args...)>& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: polymorphic function wrappers whose states to swap

## Return value
(none)

## Example
```cpp
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
    std::function<void(const char*, int)> f1{foo};
    std::function<void(const char*, int)> f2{bar};
 
    f1("f1", 1);
    f2("f2", 2);
 
    std::cout << "std::swap(f1, f2);\n";
    std::swap(f1, f2);
 
    f1("f1", 1);
    f2("f2", 2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2062 | C++11 | overload of swap for function was not required to be noexcept | required |

## See also
- [swap](/cpp/utility/functional/function/swap/)
- [swap(std::move_only_function)](/cpp/utility/functional/move_only_function/swap2/)
- [std::swap](/cpp/utility/swap/)
