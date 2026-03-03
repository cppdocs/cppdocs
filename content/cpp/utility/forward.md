---
title: "std::forward"
source_path: "cpp/utility/forward"
header: "<utility>"
category: "utility"
since: "C++14"
---

1) Forwards lvalues as either lvalues or as rvalues, depending on T.

## Declarations
```cpp
template< class T >
T&& forward( typename std::remove_reference<T>::type& t ) noexcept;
```
_(since C++11) (until C++14)_

```cpp
template< class T >
constexpr T&& forward( std::remove_reference_t<T>& t ) noexcept;
```
_(since C++14)_

```cpp
template< class T >
T&& forward( typename std::remove_reference<T>::type&& t ) noexcept;
```
_(since C++11) (until C++14)_

```cpp
template< class T >
constexpr T&& forward( std::remove_reference_t<T>&& t ) noexcept;
```
_(since C++14)_

## Parameters
- `t`: the object to be forwarded

## Return value
static_cast<T&&>(t)

## Notes
See [template argument deduction](/cpp/language/template_argument_deduction/) for the special rules behind forwarding references (T&& used as a function parameter) and [forwarding references](/cpp/language/reference/#Forwarding_references) for other detail.

## Example
```cpp
#include <iostream>
#include <memory>
#include <utility>
 
struct A
{
    A(int&& n) { std::cout << "rvalue overload, n=" << n << '\n'; }
    A(int& n)  { std::cout << "lvalue overload, n=" << n << '\n'; }
};
 
class B
{
public:
    template<class T1, class T2, class T3>
    B(T1&& t1, T2&& t2, T3&& t3) :
        a1_{std::forward<T1>(t1)},
        a2_{std::forward<T2>(t2)},
        a3_{std::forward<T3>(t3)}
    {}
 
private:
    A a1_, a2_, a3_;
};
 
template<class T, class U>
std::unique_ptr<T> make_unique1(U&& u)
{
    return std::unique_ptr<T>(new T(std::forward<U>(u)));
}
 
template<class T, class... U>
std::unique_ptr<T> make_unique2(U&&... u)
{
    return std::unique_ptr<T>(new T(std::forward<U>(u)...));
}
 
auto make_B(auto&&... args) // since C++20
{
    return B(std::forward<decltype(args)>(args)...);
}
 
int main()
{
    auto p1 = make_unique1<A>(2); // rvalue
    int i = 1;
    auto p2 = make_unique1<A>(i); // lvalue
 
    std::cout << "B\n";
    auto t = make_unique2<B>(2, i, 3);
 
    std::cout << "make_B\n";
    [[maybe_unused]] B b = make_B(4, i, 5);
}
```

## See also
- [move](/cpp/utility/move/)
- [move_if_noexcept](/cpp/utility/move_if_noexcept/)
