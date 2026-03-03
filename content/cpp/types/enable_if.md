---
title: "std::enable_if"
source_path: "cpp/types/enable_if"
header: "<type_traits>"
category: "types"
since: "C++11"
---

If B is true, std::enable_if has a public member typedef type, equal to T; otherwise, there is no member typedef.

## Declarations
```cpp
template< bool B, class T = void >
struct enable_if;
```
_(since C++11)_

## Notes
A common mistake is to declare two function templates that differ only in their default template arguments. This does not work because the declarations are treated as redeclarations of the same function template (default template arguments are not accounted for in [function template equivalence](/cpp/language/function_template/#Function_template_overloading)).

Care should be taken when using enable_if in the type of a template non-type parameter of a namespace-scope function template. Some ABI specifications like the Itanium ABI do not include the instantiation-dependent portions of non-type template parameters in the mangling, meaning that specializations of two distinct function templates might end up with the same mangled name and be erroneously linked together. For example:

The function templates #1 and #3 have different signatures and are distinct templates. Nonetheless, #2 and #4, despite being instantiations of different function templates, have the same mangled name [in the Itanium C++ ABI](https://github.com/itanium-cxx-abi/cxx-abi/issues/20) (_Z4funcI1XLi0EEvv), meaning that the linker will erroneously consider them to be the same entity.

## Example
```cpp
#include <iostream>
#include <new>
#include <string>
#include <type_traits>
 
namespace detail
{ 
    void* voidify(const volatile void* ptr) noexcept { return const_cast<void*>(ptr); } 
}
 
// #1, enabled via the return type
template<class T>
typename std::enable_if<std::is_trivially_default_constructible<T>::value>::type 
    construct(T*) 
{
    std::cout << "default constructing trivially default constructible T\n";
}
 
// same as above
template<class T>
typename std::enable_if<!std::is_trivially_default_constructible<T>::value>::type 
    construct(T* p) 
{
    std::cout << "default constructing non-trivially default constructible T\n";
    ::new(detail::voidify(p)) T;
}
 
// #2
template<class T, class... Args>
std::enable_if_t<std::is_constructible<T, Args&&...>::value> // Using helper type
    construct(T* p, Args&&... args) 
{
    std::cout << "constructing T with operation\n";
    ::new(detail::voidify(p)) T(static_cast<Args&&>(args)...);
}
 
// #3, enabled via a parameter
template<class T>
void destroy(
    T*, 
    typename std::enable_if<
        std::is_trivially_destructible<T>::value
    >::type* = 0)
{
    std::cout << "destroying trivially destructible T\n";
}
 
// #4, enabled via a non-type template parameter
template<class T,
         typename std::enable_if<
             !std::is_trivially_destructible<T>{} &&
             (std::is_class<T>{} || std::is_union<T>{}),
             bool>::type = true>
void destroy(T* t)
{
    std::cout << "destroying non-trivially destructible T\n";
    t->~T();
}
 
// #5, enabled via a type template parameter
template<class T,
	 typename = std::enable_if_t<std::is_array<T>::value>>
void destroy(T* t) // note: function signature is unmodified
{
    for (std::size_t i = 0; i < std::extent<T>::value; ++i)
        destroy((*t)[i]);
}
 
/*
template<class T,
	 typename = std::enable_if_t<std::is_void<T>::value>>
void destroy(T* t) {} // error: has the same signature with #5
*/
 
// the partial specialization of A is enabled via a template parameter
template<class T, class Enable = void>
class A {}; // primary template
 
template<class T>
class A<T, typename std::enable_if<std::is_floating_point<T>::value>::type>
{}; // specialization for floating point types
 
int main()
{
    union { int i; char s[sizeof(std::string)]; } u;
 
    construct(reinterpret_cast<int*>(&u));
    destroy(reinterpret_cast<int*>(&u));
 
    construct(reinterpret_cast<std::string*>(&u), "Hello");
    destroy(reinterpret_cast<std::string*>(&u));
 
    A<int>{}; // OK: matches the primary template
    A<double>{}; // OK: matches the partial specialization
}
```

## See also
- [void_t](/cpp/types/void_t/)
- [static_assert](/cpp/language/static_assert/)
- [SFINAE](/cpp/language/sfinae/)
- [Constraints and Concepts](/cpp/language/constraints/)
