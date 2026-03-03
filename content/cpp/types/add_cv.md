---
title: "std::add_cv, std::add_const, std::add_volatile"
source_path: "cpp/types/add_cv"
header: "<type_traits>"
category: "types"
since: "C++11"
---

Provides the member typedef type which is the same as T, except it has a cv-qualifier added (unless T is a function, a reference, or already has this cv-qualifier)

## Declarations
```cpp
template< class T >
struct add_cv;
```
_(since C++11)_

```cpp
template< class T >
struct add_const;
```
_(since C++11)_

```cpp
template< class T >
struct add_volatile;
```
_(since C++11)_

## Notes
These transformation traits can be used to establish [non-deduced contexts](/cpp/language/template_argument_deduction/#Non-deduced_contexts) in template argument deduction:

## Example
```cpp
#include <iostream>
#include <type_traits>
 
struct foo
{
    void m() { std::cout << "Non-cv\n"; }
    void m() const { std::cout << "Const\n"; }
    void m() volatile { std::cout << "Volatile\n"; }
    void m() const volatile { std::cout << "Const-volatile\n"; }
};
 
int main()
{
    foo{}.m();
    std::add_const<foo>::type{}.m();
    std::add_volatile<foo>::type{}.m();
    std::add_cv<foo>::type{}.m();
}
```

## See also
- [is_const](/cpp/types/is_const/)
- [is_volatile](/cpp/types/is_volatile/)
- [remove_cvremove_constremove_volatile](/cpp/types/remove_cv/)
- [as_const](/cpp/utility/as_const/)
