---
title: "std::is_const"
source_path: "cpp/types/is_const"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_const is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_const;
```
_(since C++11)_

## Notes
If T is a reference type then is_const<T>::value is always false. The proper way to check a potentially-reference type for constness is to remove the reference:
is_const<typename remove_reference<T>::type>.

## Example
```cpp
#include <type_traits>
 
static_assert(std::is_same_v<const int*, int const*>,
    "Remember, constness binds tightly inside pointers.");
static_assert(!std::is_const_v<int>);
static_assert(std::is_const_v<const int>);
static_assert(!std::is_const_v<int*>);
static_assert(std::is_const_v<int* const>,
    "Because the pointer itself can't be changed but the int pointed at can.");
static_assert(!std::is_const_v<const int*>,
    "Because the pointer itself can be changed but not the int pointed at.");
static_assert(!std::is_const_v<const int&>);
static_assert(std::is_const_v<std::remove_reference_t<const int&>>);
 
struct S
{
    void foo() const {}
    void bar() const {}
};
 
int main()
{
    // A const member function is const in a different way:
 
    static_assert(!std::is_const_v<decltype(&S::foo)>,
        "Because &S::foo is a pointer.");
 
    using S_mem_fun_ptr = void(S::*)() const;
 
    S_mem_fun_ptr sfp = &S::foo;
    sfp = &S::bar; // OK, can be re-pointed
    static_assert(!std::is_const_v<decltype(sfp)>,
        "Because sfp is the same pointer type and thus can be re-pointed.");
 
    const S_mem_fun_ptr csfp = &S::foo;
    // csfp = &S::bar; // Error
    static_assert(std::is_const_v<decltype(csfp)>,
        "Because csfp cannot be re-pointed.");
}
```

## See also
- [is_volatile](/cpp/types/is_volatile/)
- [as_const](/cpp/utility/as_const/)
