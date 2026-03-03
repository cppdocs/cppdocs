---
title: "operator==(std::move_only_function)"
source_path: "cpp/utility/functional/move_only_function/operator"
category: "utility"
since: "C++23"
---

Checks whether the wrapper f has a callable target by formally comparing it with [std::nullptr_t](/cpp/types/nullptr_t/). Empty wrappers (that is, wrappers without a target) compare equal, non-empty functions compare non-equal.

## Declarations
```cpp
friend bool operator==( const std::move_only_function& f, std::nullptr_t ) noexcept;
```
_(since C++23)_

## Parameters
- `f`: std::move_only_function to compare

## Return value
!f.

## Example
```cpp
#include <functional>
#include <iostream>
#include <utility>
 
using SomeVoidFunc = std::move_only_function<void(int) const>;
 
class C {
public:
    C() = default;
    C(SomeVoidFunc func) : void_func_(std::move(func)) {}
 
    void default_func(int i) const { std::cout << i << '\n'; };
 
    void operator()() const
    {
        if (void_func_ == nullptr) // specialized compare with nullptr
            default_func(7);
        else
            void_func_(7);
    }
 
private:
    SomeVoidFunc void_func_{};
};
 
void user_func(int i)
{
    std::cout << (i + 1) << '\n';
}
 
int main()
{
    C c1;
    C c2(user_func);
    c1();
    c2();
}
```

## See also
- [operator bool](/cpp/utility/functional/move_only_function/operator_bool/)
- [operator==operator!=](/cpp/utility/functional/function/operator_cmp/)
- [std::function](/cpp/utility/functional/function/)
