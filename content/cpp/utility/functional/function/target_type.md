---
title: "std::function<R(Args...)>::target_type"
source_path: "cpp/utility/functional/function/target_type"
category: "utility"
since: "C++11"
---

Returns the type of the stored function.

## Declarations
```cpp
const std::type_info& target_type() const noexcept;
```
_(since C++11)_

## Return value
typeid(T) if the stored function has type T, otherwise typeid(void)

## Example
```cpp
#include <functional>
#include <iostream>
 
int f(int a) { return -a; }
void g(double) {}
int main()
{
    // fn1 and fn2 have the same type, but their targets do not
    std::function<int(int)> fn1(f),
                            fn2([](int a) {return -a;});
    std::cout << fn1.target_type().name() << '\n'
              << fn2.target_type().name() << '\n';
 
    // since C++17 deduction guides (CTAD) can avail
    std::cout << std::function{g}.target_type().name() << '\n';
}
```

## See also
- [target](/cpp/utility/functional/function/target/)
- [type_info](/cpp/types/type_info/)
- [typeid](/cpp/language/typeid/)
