---
title: "std::any::operator="
source_path: "cpp/utility/any/operator"
category: "utility"
since: "C++17"
---

Assigns contents to the contained value.

## Declarations
```cpp
any& operator=( const any& rhs );
```
_(since C++17)_

```cpp
any& operator=( any&& rhs ) noexcept;
```
_(since C++17)_

```cpp
template< typename ValueType >
any& operator=( ValueType&& rhs );
```
_(since C++17)_

## Parameters
- `rhs`: object whose contained value to assign

## Return value
*this

## Example
```cpp
#include <any>
#include <cassert>
#include <iomanip>
#include <iostream>
#include <string>
#include <typeinfo>
 
int main()
{
    using namespace std::string_literals;
    std::string cat{"cat"};
 
    std::any a1{42};
    std::any a2{cat};
    assert(a1.type() == typeid(int));
    assert(a2.type() == typeid(std::string));
 
    a1 = a2; // overload (1)
    assert(a1.type() == typeid(std::string));
    assert(a2.type() == typeid(std::string));
    assert(std::any_cast<std::string&>(a1) == cat);
    assert(std::any_cast<std::string&>(a2) == cat);
 
    a1 = 96; // overload (3)
    a2 = "dog"s; // overload (3)
    a1 = std::move(a2); // overload (2)
    assert(a1.type() == typeid(std::string));
    assert(std::any_cast<std::string&>(a1) == "dog");
    // The state of a2 is valid but unspecified. In fact,
    // it is void in gcc/clang and std::string in msvc.
    std::cout << "a2.type(): " << std::quoted(a2.type().name()) << '\n';
 
    a1 = std::move(cat); // overload (3)
    assert(*std::any_cast<std::string>(&a1) == "cat");
    // The state of cat is valid but indeterminate:
    std::cout << "cat: " << std::quoted(cat) << '\n';
}
```

## See also
- [(constructor)](/cpp/utility/any/any/)
