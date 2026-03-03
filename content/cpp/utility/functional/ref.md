---
title: "std::ref, std::cref"
source_path: "cpp/utility/functional/ref"
header: "<functional>"
category: "utility"
since: "C++11"
---

Function templates ref and cref are helper functions that generate an object of type [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/), using [template argument deduction](/cpp/language/template_argument_deduction/) to determine the template argument of the result.

## Declarations
```cpp
template< class T >
std::reference_wrapper<T> ref( T& t ) noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class T >
std::reference_wrapper<T>
ref( std::reference_wrapper<T> t ) noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class T >
void ref( const T&& ) = delete;
```
_(since C++11)_

```cpp
template< class T >
std::reference_wrapper<const T> cref( const T& t ) noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class T >
std::reference_wrapper<const T>
cref( std::reference_wrapper<T> t ) noexcept;
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class T >
void cref( const T&& ) = delete;
```
_(since C++11)_

## Parameters
- `t`: lvalue reference to object that needs to be wrapped or an instance of std::reference_wrapper

## Example
```cpp
#include <functional>
#include <iostream>
 
void f(int& n1, int& n2, const int& n3)
{
    std::cout << "In function: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
    ++n1; // increments the copy of n1 stored in the function object
    ++n2; // increments the main()'s n2
    // ++n3; // compile error
}
 
int main()
{
    int n1 = 1, n2 = 2, n3 = 3;
    std::function<void()> bound_f = std::bind(f, n1, std::ref(n2), std::cref(n3));
    n1 = 10;
    n2 = 11;
    n3 = 12;
    std::cout << "Before function: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
    bound_f();
    std::cout << "After function: " << n1 << ' ' << n2 << ' ' << n3 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3146 | C++11 | unwrapping overloads sometimes led to error | made always valid |

## See also
- [reference_wrapper](/cpp/utility/functional/reference_wrapper/)
- [CopyConstructible](/cpp/named_req/copyconstructible/)
- [CopyAssignable](/cpp/named_req/copyassignable/)
