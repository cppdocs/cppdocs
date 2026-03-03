---
title: "std::forward_like"
source_path: "cpp/utility/forward_like"
header: "<utility>"
category: "utility"
since: "C++23"
---

Returns a reference to x which has similar properties to T&&.

## Declarations
```cpp
template< class T, class U >
constexpr auto&& forward_like( U&& x ) noexcept;
```
_(since C++23)_

## Parameters
- `x`: a value needs to be forwarded like type T

## Return value
A reference to x of the type determined as above.

## Notes
Like [std::forward](/cpp/utility/forward/), [std::move](/cpp/utility/move/), and [std::as_const](/cpp/utility/as_const/), std::forward_like is a type cast that only influences the [value category](/cpp/language/value_category/) of an expression, or potentially adds const-qualification.

When m is an actual member and thus o.m a valid expression, this is usually spelled as [std::forward](/cpp/utility/forward/)<decltype(o)>(o).m in C++20 code.

This leads to three possible models, called merge, tuple, and language.

The main scenario that std::forward_like caters to is adapting “far” objects. Neither the tuple nor the language scenarios do the right thing for that main use-case, so the merge model is used for std::forward_like.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <memory>
#include <optional>
#include <type_traits>
#include <utility>
#include <vector>
 
struct TypeTeller
{
    void operator()(this auto&& self)
    {
        using SelfType = decltype(self);
        using UnrefSelfType = std::remove_reference_t<SelfType>;
        if constexpr (std::is_lvalue_reference_v<SelfType>)
        {
            if constexpr (std::is_const_v<UnrefSelfType>)
                std::cout << "const lvalue\n";
            else
                std::cout << "mutable lvalue\n";
        }
        else
        {
            if constexpr (std::is_const_v<UnrefSelfType>)
                std::cout << "const rvalue\n";
            else
                std::cout << "mutable rvalue\n";
        }
    }
};
 
struct FarStates
{
    std::unique_ptr<TypeTeller> ptr;
    std::optional<TypeTeller> opt;
    std::vector<TypeTeller> container;
 
    auto&& from_opt(this auto&& self)
    {
        return std::forward_like<decltype(self)>(self.opt.value());
        // It is OK to use std::forward<decltype(self)>(self).opt.value(),
        // because std::optional provides suitable accessors.
    }
 
    auto&& operator[](this auto&& self, std::size_t i)
    {
        return std::forward_like<decltype(self)>(self.container.at(i));
        // It is not so good to use std::forward<decltype(self)>(self)[i], because
        // containers do not provide rvalue subscript access, although they could.
    }
 
    auto&& from_ptr(this auto&& self)
    {
        if (!self.ptr)
            throw std::bad_optional_access{};
        return std::forward_like<decltype(self)>(*self.ptr);
        // It is not good to use *std::forward<decltype(self)>(self).ptr, because
        // std::unique_ptr<TypeTeller> always dereferences to a non-const lvalue.
    }
};
 
int main()
{
    FarStates my_state
    {
        .ptr{std::make_unique<TypeTeller>()},
        .opt{std::in_place, TypeTeller{}},
        .container{std::vector<TypeTeller>(1)},
    };
 
    my_state.from_ptr()();
    my_state.from_opt()();
    my_state[0]();
 
    std::cout << '\n';
 
    std::as_const(my_state).from_ptr()();
    std::as_const(my_state).from_opt()();
    std::as_const(my_state)[0]();
 
    std::cout << '\n';
 
    std::move(my_state).from_ptr()();
    std::move(my_state).from_opt()();
    std::move(my_state)[0]();
 
    std::cout << '\n';
 
    std::move(std::as_const(my_state)).from_ptr()();
    std::move(std::as_const(my_state)).from_opt()();
    std::move(std::as_const(my_state))[0]();
 
    std::cout << '\n';
}
```

## See also
- [move](/cpp/utility/move/)
- [forward](/cpp/utility/forward/)
- [as_const](/cpp/utility/as_const/)
