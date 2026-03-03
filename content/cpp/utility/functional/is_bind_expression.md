---
title: "std::is_bind_expression"
source_path: "cpp/utility/functional/is_bind_expression"
header: "<functional>"
category: "utility"
since: "C++11"
---

If T is a type produced by a call to [std::bind](/cpp/utility/functional/bind/) (but not [std::bind_front](/cpp/utility/functional/bind_front/) or [std::bind_back](/cpp/utility/functional/bind_front/)), this template is derived from [std::true_type](/cpp/types/integral_constant/). For any other type (unless user-specialized), this template is derived from [std::false_type](/cpp/types/integral_constant/).

## Declarations
```cpp
template< class T >
struct is_bind_expression;
```
_(since C++11)_

## Example
```cpp
#include <functional>
#include <iostream>
#include <type_traits>
 
struct MyBind
{
    typedef int result_type;
    int operator()(int a, int b) const { return a + b; }
};
 
namespace std
{
    template<>
    struct is_bind_expression<MyBind> : public true_type {};
}
 
int f(int n1, int n2)
{
    return n1 + n2;
}
 
int main()
{
    // as if bind(f, bind(MyBind(), _1, _2), 2)
    auto b = std::bind(f, MyBind(), 2); 
 
    std::cout << "Adding 2 to the sum of 10 and 11 gives " << b(10, 11) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2010 | C++11 | program-defined specializations couldonly be derived from std::false_type | can be derived fromstd::true_type |

## See also
- [bind](/cpp/utility/functional/bind/)
