---
title: "std::not_fn"
source_path: "cpp/utility/functional/not_fn"
header: "<functional>"
category: "utility"
since: "C++26"
---

1) Creates a forwarding call wrapper that returns the negation of the callable object it holds.

## Declarations
```cpp
template< class F >
/* unspecified */ not_fn( F&& f );
```
_(since C++17) (constexpr since C++20)_

```cpp
template< auto ConstFn >
constexpr /* unspecified */ not_fn() noexcept;
```
_(since C++26)_

## Parameters
- `f`: the object from which the Callable object held by the wrapper is constructed

## Return value
The return type of std::not_fn holds a member object of type [std::decay_t](/cpp/types/decay/)<F>.

## Notes
std::not_fn is intended to replace the C++03-era negators [std::not1](/cpp/utility/functional/not1/) and [std::not2](/cpp/utility/functional/not2/).

## Example
```cpp
#include <cassert>
#include <functional>
 
bool is_same(int a, int b) noexcept
{
    return a == b;
}
 
struct S
{
    int val;
    bool is_same(int arg) const noexcept { return val == arg; }
};
 
int main()
{
    // Using with a free function:
    auto is_differ = std::not_fn(is_same);
    assert(is_differ(8, 8) == false); // equivalent to: !is_same(8, 8) == false
    assert(is_differ(6, 9) == true); // equivalent to: !is_same(8, 0) == true
 
    // Using with a member function:
    auto member_differ = std::not_fn(&S::is_same);
    assert(member_differ(S{3}, 3) == false); //: S tmp{6}; !tmp.is_same(6) == false
 
    // Noexcept-specification is preserved:
    static_assert(noexcept(is_differ) == noexcept(is_same));
    static_assert(noexcept(member_differ) == noexcept(&S::is_same));
 
    // Using with a function object:
    auto same = [](int a, int b) { return a == b; };
    auto differ = std::not_fn(same);
    assert(differ(1, 2) == true); //: !same(1, 2) == true
    assert(differ(2, 2) == false); //: !same(2, 2) == false
 
#if __cpp_lib_not_fn >= 202306L
    auto is_differ_cpp26 = std::not_fn<is_same>();
    assert(is_differ_cpp26(8, 8) == false);
    assert(is_differ_cpp26(6, 9) == true);
 
    auto member_differ_cpp26 = std::not_fn<&S::is_same>();
    assert(member_differ_cpp26(S{3}, 3) == false);
 
    auto differ_cpp26 = std::not_fn<same>();
    static_assert(differ_cpp26(1, 2) == true);
    static_assert(differ_cpp26(2, 2) == false);
#endif
}
```

## See also
- [not1](/cpp/utility/functional/not1/)
- [std::unary_negate](/cpp/utility/functional/unary_negate/)
- [not2](/cpp/utility/functional/not2/)
- [std::binary_negate](/cpp/utility/functional/binary_negate/)
