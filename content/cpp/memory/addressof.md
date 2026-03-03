---
title: "std::addressof"
source_path: "cpp/memory/addressof"
header: "<memory>"
category: "memory"
since: "C++11"
---

1) Obtains the actual address of the object or function arg, even in presence of overloaded operator&.

## Declarations
```cpp
template< class T >
T* addressof( T& arg ) noexcept;
```
_(since C++11) (constexpr since C++17)_

```cpp
template< class T >
const T* addressof( const T&& ) = delete;
```
_(since C++11)_

## Parameters
- `arg`: lvalue object or function

## Return value
Pointer to arg.

## Notes
constexpr for addressof is added by [LWG2296](https://cplusplus.github.io/LWG/issue2296), and MSVC STL applies the change to C++14 mode as a defect report.

There are some weird cases where use of built-in operator& is ill-formed due to [argument-dependent lookup](/cpp/language/adl/) even if it is not overloaded, and std::addressof can be used instead.

## Example
```cpp
#include <iostream>
#include <memory>
 
template<class T>
struct Ptr
{
    T* pad; // add pad to show difference between 'this' and 'data'
    T* data;
    Ptr(T* arg) : pad(nullptr), data(arg)
    {
        std::cout << "Ctor this = " << this << '\n';
    }
 
    ~Ptr() { delete data; }
    T** operator&() { return &data; }
};
 
template<class T>
void f(Ptr<T>* p)
{
    std::cout << "Ptr   overload called with p = " << p << '\n';
}
 
void f(int** p)
{
    std::cout << "int** overload called with p = " << p << '\n';
}
 
int main()
{
    Ptr<int> p(new int(42));
    f(&p);                // calls int** overload
    f(std::addressof(p)); // calls Ptr<int>* overload, (= this)
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2598 | C++11 | std::addressof<const T> could take address of rvalues | disallowed by a deleted overload |

## See also
- [allocator](/cpp/memory/allocator/)
- [pointer_to](/cpp/memory/pointer_traits/pointer_to/)
