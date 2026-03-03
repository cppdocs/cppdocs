---
title: "std::any::any"
source_path: "cpp/utility/any/any"
category: "utility"
since: "C++17"
---

Constructs a new any object.

## Declarations
```cpp
constexpr any() noexcept;
```
_(since C++17)_

```cpp
any( const any& other );
```
_(since C++17)_

```cpp
any( any&& other ) noexcept;
```
_(since C++17)_

```cpp
template< class ValueType >
any( ValueType&& value );
```
_(since C++17)_

```cpp
template< class ValueType, class... Args >
explicit any( std::in_place_type_t<ValueType>, Args&&... args );
```
_(since C++17)_

```cpp
template< class ValueType, class U, class... Args >
explicit any( std::in_place_type_t<ValueType>, std::initializer_list<U> il,
Args&&... args );
```
_(since C++17)_

## Parameters
- `other`: another any object to copy or move from
- `value`: value to initialize the contained value with
- `il, args`: arguments to be passed to the constructor of the contained object

## Notes
Because the default constructor is constexpr, static std::anys are initialized as part of [static non-local initialization](/cpp/language/initialization/#Non-local_variables), before any dynamic non-local initialization begins. This makes it safe to use an object of type std::any in a constructor of any static object.

## Example
```cpp
#include <boost/core/demangle.hpp>
 
#include <any>
#include <initializer_list>
#include <iostream>
#include <memory>
#include <set>
#include <string>
#include <utility>
 
struct A
{
    int age;
    std::string name;
    double salary;
 
#if __cpp_aggregate_paren_init < 201902L
    // Required before C++20 for in-place construction
    A(int age, std::string name, double salary)
        : age(age), name(std::move(name)), salary(salary) {}
#endif
};
 
// Using abi demangle to print nice type name of instance of any holding
void printType(const std::any& a)
{
    std::cout << boost::core::demangle(a.type().name()) << '\n';
}
 
int main()
{
    // Constructor #4: std::any holding int
    std::any a1{7};
 
    // Constructor #5: std::any holding A, constructed in place
    std::any a2(std::in_place_type<A>, 30, "Ada", 1000.25);
 
    // Constructor #6: std::any holding a set of A with custom comparison
    auto lambda = [](auto&& l, auto&& r){ return l.age < r.age; };
    std::any a3(
        std::in_place_type<std::set<A, decltype(lambda)>>,
        {
            A{39, std::string{"Ada"}, 100.25},
            A{20, std::string{"Bob"}, 75.5}
        },
        lambda);
 
    printType(a1);
    printType(a2);
    printType(a3);
}
```

## See also
- [operator=](/cpp/utility/any/operator/)
