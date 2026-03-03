---
title: "std::move"
source_path: "cpp/utility/move"
header: "<utility>"
category: "utility"
since: "C++14"
---

std::move is used to indicate that an object t may be "moved from", i.e. allowing the efficient transfer of resources from t to another object.

## Declarations
```cpp
template< class T >
typename std::remove_reference<T>::type&& move( T&& t ) noexcept;
```
_(since C++11) (until C++14)_

```cpp
template< class T >
constexpr std::remove_reference_t<T>&& move( T&& t ) noexcept;
```
_(since C++14)_

## Parameters
- `t`: the object to be moved

## Return value
static_cast<typename [std::remove_reference](/cpp/types/remove_reference/)<T>::type&&>(t)

## Notes
The functions that accept rvalue reference parameters (including [move constructors](/cpp/language/move_constructor/), [move assignment operators](/cpp/language/move_operator/), and regular member functions such as [std::vector::push_back](/cpp/container/vector/push_back/)) are selected, by [overload resolution](/cpp/language/overload_resolution/), when called with [rvalue](/cpp/language/value_category/) arguments (either [prvalues](/cpp/language/value_category/) such as a temporary object or [xvalues](/cpp/language/value_category/) such as the one produced by std::move). If the argument identifies a resource-owning object, these overloads have the option, but aren't required, to move any resources held by the argument. For example, a move constructor of a linked list might copy the pointer to the head of the list and store nullptr in the argument instead of allocating and copying individual nodes.

Names of [rvalue reference](/cpp/language/reference/) variables are [lvalues](/cpp/language/value_category/) and have to be converted to [xvalues](/cpp/language/value_category/) to be bound to the function overloads that accept rvalue reference parameters, which is why [move constructors](/cpp/language/move_constructor/) and [move assignment operators](/cpp/language/move_operator/) typically use std::move:

One exception is when the type of the function parameter is a [forwarding reference](/cpp/language/reference/#Forwarding_references) (which looks like an rvalue reference to type template parameter), in which case [std::forward](/cpp/utility/forward/) is used instead.

Unless otherwise specified, all standard library objects that have been moved from are placed in a "valid but unspecified state", meaning the object's class invariants hold (so functions without preconditions, such as the assignment operator, can be safely used on the object after it was moved from):

Also, the standard library functions called with xvalue arguments may assume the argument is the only reference to the object; if it was constructed from an lvalue with std::move, no aliasing checks are made. However, self-move-assignment of standard library types is guaranteed to place the object in a valid (but usually unspecified) state:

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <utility>
#include <vector>
 
int main()
{
    std::string str = "Salut";
    std::vector<std::string> v;
 
    // uses the push_back(const T&) overload, which means
    // we'll incur the cost of copying str
    v.push_back(str);
    std::cout << "After copy, str is " << std::quoted(str) << '\n';
 
    // uses the rvalue reference push_back(T&&) overload,
    // which means no strings will be copied; instead, the contents
    // of str will be moved into the vector. This is less
    // expensive, but also means str might now be empty.
    v.push_back(std::move(str));
    std::cout << "After move, str is " << std::quoted(str) << '\n';
 
    std::cout << "The contents of the vector are {" << std::quoted(v[0])
              << ", " << std::quoted(v[1]) << "}\n";
}
```

## See also
- [forward](/cpp/utility/forward/)
- [move_if_noexcept](/cpp/utility/move_if_noexcept/)
- [move](/cpp/algorithm/move/)
