---
title: "std::move"
source_path: "cpp/utility/move"
header: "<utility>"
category: "utility"
since: "C++11"
---

Converts its argument to an xvalue expression so move-aware overloads can be selected.

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
`std::move` does not move by itself. It performs a cast; moving happens only if a selected operation (such as a move constructor or move assignment operator) actually transfers resources.

Names of [rvalue reference](/cpp/language/reference/) variables are still [lvalues](/cpp/language/value_category/). `std::move` is commonly used to convert such named objects back to xvalues.

For [forwarding references](/cpp/language/reference/#Forwarding_references), prefer [std::forward](/cpp/utility/forward/) so lvalues stay lvalues and rvalues stay rvalues.

Unless otherwise specified, moved-from standard-library objects are in a valid but unspecified state: class invariants hold, but observable value content is not guaranteed.

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
