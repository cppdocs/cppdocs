---
title: "std::optional<T>::optional"
source_path: "cpp/utility/optional/optional"
category: "utility"
since: "C++17"
---

Constructs a new optional object.

## Declarations
```cpp
constexpr optional() noexcept;
constexpr optional( std::nullopt_t ) noexcept;
```
_(since C++17)_

```cpp
constexpr optional( const optional& other );
```
_(since C++17)_

```cpp
constexpr optional( optional&& other ) noexcept(/* see below */);
```
_(since C++17)_

```cpp
template < class U >
optional( const optional<U>& other );
```
_(since C++17) (constexpr since C++20) (conditionally explicit)_

```cpp
template < class U >
optional( optional<U>&& other );
```
_(since C++17) (constexpr since C++20) (conditionally explicit)_

```cpp
template< class... Args >
constexpr explicit optional( std::in_place_t, Args&&... args );
```
_(since C++17)_

```cpp
template< class U, class... Args >
constexpr explicit optional( std::in_place_t,
std::initializer_list<U> ilist,
Args&&... args );
```
_(since C++17)_

```cpp
template < class U = T >
constexpr optional( U&& value );
```
_(since C++17) (conditionally explicit)_

## Parameters
- `other`: another optional object whose contained value is copied
- `value`: value with which to initialize the contained value
- `args...`: arguments with which to initialize the contained value
- `ilist`: initializer list with which to initialize the contained value

## Notes
Before the resolution of [LWG issue 3836](https://cplusplus.github.io/LWG/issue3836), constructing an [std::optional](/cpp/utility/optional/)<bool> from [std::optional](/cpp/utility/optional/)<U> would select overload ([8](#Version_8)) instead of overloads ([4,5](#Version_4)) if U is not bool. This is because overloads ([4,5](#Version_4)) did not participate in overload resolution if T (bool in this case) can be constructed or converted from [std::optional](/cpp/utility/optional/)<U>, but [std::optional::operator bool](/cpp/utility/optional/operator_bool/) makes the conversion possible for any U.

As a result, the constructed [std::optional](/cpp/utility/optional/)<bool> always contains a value. That value is determined by whether the provided [std::optional](/cpp/utility/optional/)<U> object contains a value, rather than the bool value direct-initialized from the contained value:

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
 
int main()
{
    std::optional<int> o1, // empty
                       o2 = 1, // init from rvalue
                       o3 = o2; // copy-constructor
 
    // calls std::string( initializer_list<CharT> ) constructor
    std::optional<std::string> o4(std::in_place, {'a', 'b', 'c'});
 
    // calls std::string( size_type count, CharT ch ) constructor
    std::optional<std::string> o5(std::in_place, 3, 'A');
 
    // Move-constructed from std::string using deduction guide to pick the type
 
    std::optional o6(std::string{"deduction"});
 
    std::cout << *o2 << ' ' << *o3 << ' ' << *o4 << ' ' << *o5  << ' ' << *o6 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3836 | C++17 | when constructing an std::optional<bool>from std::optional<U>, the overload resolutionwould select overload (8) if U is not bool | always selects theconverting copy/moveconstructor in this case |
| P0602R4 | C++17 | copy/move constructors might not be trivialeven if underlying constructor is trivial | required topropagate triviality |
| P2231R1 | C++20 | converting constructors (4,5) from another std::optional wasnot constexpr while the required operations can be in C++20 | made constexpr |

## See also
- [make_optional](/cpp/utility/optional/make_optional/)
