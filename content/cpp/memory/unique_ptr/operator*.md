---
title: "std::unique_ptr<T,Deleter>::operator*, std::unique_ptr<T,Deleter>::operator->"
source_path: "cpp/memory/unique_ptr/operator"
category: "memory"
---

operator* and operator-> provide access to the object owned by *this.

## Declarations
```cpp
typename std::add_lvalue_reference<T>::type operator*() const
noexcept(noexcept(*std::declval<pointer>()));
```
_(since C++11) (constexpr since C++23)_

```cpp
pointer operator->() const noexcept;
```
_(since C++11) (constexpr since C++23)_

## Notes
The use of [std::add_lvalue_reference](/cpp/types/add_reference/) is to make it possible to instantiate [std::unique_ptr](/cpp/memory/unique_ptr/)<void> since void& isn't allowed in C++ while [std::add_lvalue_reference](/cpp/types/add_reference/)<void> produces void. See [LWG673](https://cplusplus.github.io/LWG/issue673) for details.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    void bar() { std::cout << "Foo::bar\n"; }
};
 
void f(const Foo&) 
{
    std::cout << "f(const Foo&)\n";
}
 
int main() 
{
    std::unique_ptr<Foo> ptr(new Foo);
 
    ptr->bar();
    f(*ptr);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2762 | C++11 | operator* might be potentially-throwing even if*get() was noexcept | a conditional exception specification added |

## See also
- [get](/cpp/memory/unique_ptr/get/)
