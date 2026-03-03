---
title: "std::function<R(Args...)>::target"
source_path: "cpp/utility/functional/function/target"
category: "utility"
since: "C++11"
---

Returns a pointer to the stored callable function target.

## Declarations
```cpp
template< class T >
T* target() noexcept;
```
_(since C++11)_

```cpp
template< class T >
const T* target() const noexcept;
```
_(since C++11)_

## Return value
A pointer to the stored function if target_type() == typeid(T), otherwise a null pointer.

## Example
```cpp
#include <functional>
#include <iostream>
 
int f(int, int) { return 1; }
int g(int, int) { return 2; }
void test(std::function<int(int, int)> const& arg)
{
    std::cout << "test function: ";
    if (arg.target<std::plus<int>>())
        std::cout << "it is plus\n";
    if (arg.target<std::minus<int>>())
        std::cout << "it is minus\n";
 
    int (*const* ptr)(int, int) = arg.target<int(*)(int, int)>();
    if (ptr && *ptr == f)
        std::cout << "it is the function f\n";
    if (ptr && *ptr == g)
        std::cout << "it is the function g\n";
}
 
int main()
{
    test(std::function<int(int, int)>(std::plus<int>()));
    test(std::function<int(int, int)>(std::minus<int>()));
    test(std::function<int(int, int)>(f));
    test(std::function<int(int, int)>(g));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2591 | C++11 | the behavior is undefined if T is not Callable | behavior is defined (always returns nullptr) |

## See also
- [target_type](/cpp/utility/functional/function/target_type/)
