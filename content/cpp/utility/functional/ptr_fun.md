---
title: "std::ptr_fun"
source_path: "cpp/utility/functional/ptr_fun"
header: "<functional>"
category: "utility"
---

Creates a function wrapper object (either [std::pointer_to_unary_function](/cpp/utility/functional/pointer_to_unary_function/) or [std::pointer_to_binary_function](/cpp/utility/functional/pointer_to_binary_function/)), deducing the target type from the template arguments.

## Declarations
```cpp
template< class Arg, class Result >
std::pointer_to_unary_function<Arg,Result>
ptr_fun( Result (*f)(Arg) );
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Arg1, class Arg2, class Result >
std::pointer_to_binary_function<Arg1,Arg2,Result>
ptr_fun( Result (*f)(Arg1, Arg2) );
```
_(deprecated in C++11) (removed in C++17)_

## Parameters
- `f`: pointer to a function to create a wrapper for

## Return value
A function object wrapping f.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <string_view>
 
constexpr bool is_vowel(char c)
{
    return std::string_view{"aeoiuAEIOU"}.find(c) != std::string_view::npos;
}
 
int main()
{
    std::string_view s = "Hello, world!";
    std::ranges::copy_if(s, std::ostreambuf_iterator<char>(std::cout),
        std::not1(std::ptr_fun(is_vowel)));
#if 0
// C++11 alternatives:
        std::not1(std::cref(is_vowel)));
        std::not1(std::function<bool(char)>(is_vowel)));
        [](char c) { return !is_vowel(c); });
// C++17 alternatives:
        std::not_fn(is_vowel));
#endif
}
```

## See also
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
- [not_fn](/cpp/utility/functional/not_fn/)
